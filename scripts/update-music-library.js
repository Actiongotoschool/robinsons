#!/usr/bin/env node

/**
 * Music Library Auto-Update Script
 * 
 * This script automatically scans the music directory for audio files
 * and updates the library.json file with any new tracks found.
 * 
 * Usage:
 *   node scripts/update-music-library.js
 * 
 * Features:
 * - Scans for supported audio formats: .flac, .mp3, .wav, .ogg, .m4a, .aac
 * - Extracts metadata from filenames (Artist - Title.ext format)
 * - Preserves existing manually-added metadata in library.json
 * - Removes entries for files that no longer exist
 * - Maintains playlists and other library settings
 */

const fs = require('fs');
const path = require('path');

// Configuration
const MUSIC_DIR = path.join(__dirname, '..', 'music');
const LIBRARY_FILE = path.join(MUSIC_DIR, 'library.json');
const SUPPORTED_FORMATS = ['.flac', '.mp3', '.wav', '.ogg', '.m4a', '.aac'];

/**
 * Get all audio files in the music directory
 */
function getAudioFiles() {
    const files = fs.readdirSync(MUSIC_DIR);
    return files.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return SUPPORTED_FORMATS.includes(ext);
    });
}

/**
 * Parse filename to extract artist and title
 * Expected format: "Artist - Title.ext" or just "Title.ext"
 */
function parseFilename(filename) {
    const nameWithoutExt = path.basename(filename, path.extname(filename));
    
    // Try to match "Artist - Title" pattern
    const match = nameWithoutExt.match(/^(.+?)\s*-\s*(.+)$/);
    
    if (match) {
        return {
            artist: match[1].trim(),
            title: match[2].trim()
        };
    }
    
    // No artist in filename, use filename as title
    return {
        artist: 'Unknown Artist',
        title: nameWithoutExt.trim()
    };
}

/**
 * Generate a unique ID for a track based on filename
 */
function generateTrackId(filename) {
    const sanitized = filename
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
    return `track-${sanitized}`;
}

/**
 * Create a track entry from an audio file
 */
function createTrackEntry(filename) {
    const { artist, title } = parseFilename(filename);
    const ext = path.extname(filename).toLowerCase().slice(1);
    
    return {
        id: generateTrackId(filename),
        title: title,
        artist: artist,
        album: '',
        duration: 0, // Duration would require audio parsing library
        genre: '',
        year: null, // Year is unknown without metadata parsing
        file: filename,
        cover: ''
    };
}

/**
 * Load existing library or create default structure
 */
function loadLibrary() {
    try {
        if (fs.existsSync(LIBRARY_FILE)) {
            const content = fs.readFileSync(LIBRARY_FILE, 'utf-8');
            return JSON.parse(content);
        }
    } catch (error) {
        console.warn('Warning: Could not parse existing library.json, creating new one');
    }
    
    // Return default structure
    return {
        library: {
            name: 'Robinsons Arcade Music',
            version: '1.0',
            tracks: [],
            playlists: []
        },
        instructions: {
            addingTracks: 'Add your audio files to this folder and run the update-music-library.js script',
            supportedFormats: ['flac', 'mp3', 'wav', 'ogg', 'm4a', 'aac'],
            coverImages: "Place cover art in the 'covers' subfolder"
        }
    };
}

/**
 * Save library to JSON file
 */
function saveLibrary(library) {
    const content = JSON.stringify(library, null, 2);
    fs.writeFileSync(LIBRARY_FILE, content, 'utf-8');
}

/**
 * Update the music library
 */
function updateLibrary() {
    console.log('🎵 Music Library Auto-Update');
    console.log('============================\n');
    
    // Get current audio files
    const audioFiles = getAudioFiles();
    console.log(`Found ${audioFiles.length} audio file(s) in music directory:\n`);
    audioFiles.forEach(file => console.log(`  📁 ${file}`));
    console.log('');
    
    // Load existing library
    const libraryData = loadLibrary();
    const existingTracks = libraryData.library.tracks || [];
    
    // Create a map of existing tracks by filename for quick lookup
    const existingTracksByFile = new Map();
    existingTracks.forEach(track => {
        if (track.file) {
            existingTracksByFile.set(track.file, track);
        }
    });
    
    // Track statistics
    let added = 0;
    let preserved = 0;
    let removed = 0;
    
    // Build new tracks array
    const newTracks = [];
    
    // Process each audio file
    for (const filename of audioFiles) {
        const existingTrack = existingTracksByFile.get(filename);
        
        if (existingTrack) {
            // Preserve existing track with its metadata
            newTracks.push(existingTrack);
            preserved++;
            console.log(`✓ Preserved: ${existingTrack.title} by ${existingTrack.artist}`);
        } else {
            // Create new track entry
            const newTrack = createTrackEntry(filename);
            newTracks.push(newTrack);
            added++;
            console.log(`+ Added: ${newTrack.title} by ${newTrack.artist}`);
        }
    }
    
    // Count removed tracks (in library but file no longer exists)
    for (const track of existingTracks) {
        if (track.file && !audioFiles.includes(track.file)) {
            removed++;
            console.log(`- Removed: ${track.title} by ${track.artist} (file not found)`);
        }
    }
    
    // Track IDs already added to avoid duplicates
    const addedTrackIds = new Set(newTracks.map(t => t.id));
    
    // Also keep any sample/placeholder tracks from original library
    for (const track of existingTracks) {
        // Check if this is a sample/placeholder track we should keep
        if (track.id && track.id.startsWith('sample-') && !addedTrackIds.has(track.id)) {
            newTracks.push(track);
            addedTrackIds.add(track.id);
            console.log(`⚠ Kept placeholder: ${track.title} (sample track without file)`);
        }
    }
    
    // Update library
    libraryData.library.tracks = newTracks;
    libraryData.library.lastUpdated = new Date().toISOString();
    
    // Clean up playlists - remove references to tracks that no longer exist
    const validTrackIds = new Set(newTracks.map(t => t.id));
    if (libraryData.library.playlists) {
        libraryData.library.playlists = libraryData.library.playlists.map(playlist => {
            const validPlaylistTracks = (playlist.tracks || []).filter(trackId => 
                validTrackIds.has(trackId)
            );
            return {
                ...playlist,
                tracks: validPlaylistTracks
            };
        });
    }
    
    // Save updated library
    saveLibrary(libraryData);
    
    // Summary
    console.log('\n============================');
    console.log('📊 Summary:');
    console.log(`   Added:     ${added} track(s)`);
    console.log(`   Preserved: ${preserved} track(s)`);
    console.log(`   Removed:   ${removed} track(s)`);
    console.log(`   Total:     ${newTracks.length} track(s)`);
    console.log('\n✅ library.json has been updated!');
}

// Run the update
updateLibrary();
