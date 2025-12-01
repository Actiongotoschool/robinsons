# Music Library

This folder contains music files for the Robinsons Arcade Music Player.

## Supported Formats
- FLAC (Free Lossless Audio Codec) - Recommended
- MP3
- WAV
- OGG
- M4A/AAC

## Adding Music

### Option 1: Auto-Update (Recommended)
1. Place your audio files in this directory
2. Name files using the format: `Artist - Title.ext` (e.g., `John Doe - My Song.flac`)
3. Run the auto-update script:
   ```bash
   node scripts/update-music-library.js
   ```
4. The script will automatically add new tracks to `library.json`

### Option 2: Manual Update
1. Place your audio files in this directory
2. Manually edit `library.json` to add track metadata
3. The music player will automatically detect and display your tracks

## Auto-Update Script Features

The `scripts/update-music-library.js` script provides:

- **Automatic scanning**: Finds all audio files in the music directory
- **Metadata extraction**: Parses "Artist - Title" format from filenames
- **Preserves manual edits**: Keeps any metadata you've manually added
- **Removes missing files**: Cleans up entries for deleted files
- **Maintains playlists**: Preserves your playlist configurations

### Running the Script

```bash
# From the repository root
node scripts/update-music-library.js
```

The script will output a summary of changes:
- Files added
- Files preserved (existing with metadata)
- Files removed (no longer exist)

## Library Format
See `library.json` for the track listing format.

## Note
Please ensure you have the rights to use any music files you add to this folder.
