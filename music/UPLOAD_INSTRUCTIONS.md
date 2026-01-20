# Music Upload Instructions

## Approved Upload: Keshi - drunk

✅ **APPROVED** - Ready for file upload

### Track Details
- **ID**: submission-1768946593493
- **Title**: Keshi - drunk
- **Artist**: 03
- **Album**: Keshi 2.0
- **Expected Filename**: `03_-_keshi_-_drunk.flac`
- **Size**: ~22.7 MB
- **Format**: FLAC

### Next Steps

1. **Upload the audio file** to this `music/` directory with the exact filename: `03_-_keshi_-_drunk.flac`

2. **Verify the upload**:
   ```bash
   ls -lh music/03_-_keshi_-_drunk.flac
   ```

3. **Test the player**: Open `player.html` in a browser to verify the track appears in the library

4. **Update metadata (optional)**: If the actual duration is known, you can update the `duration` field in `library.json`

### Alternative: Use Auto-Update Script

If you prefer to use a different filename (e.g., `03 - Keshi - drunk.flac`), you can:
1. Upload the file with any name following "Artist - Title.ext" format
2. Run: `node scripts/update-music-library.js`
3. The script will automatically update the library.json

---

**Note**: The library.json has already been updated with the track metadata. Once you upload the file with the correct name, the music player will automatically detect and play it.
