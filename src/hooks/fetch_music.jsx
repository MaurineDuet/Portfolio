//Basic
import { useState, useEffect } from 'react'

/* Mise en place d'une fonction fetch générique */

export function useFetchMusic(url) {
      const [songs, setSongs] = useState(null)
      const [error, setError] = useState(false)

      useEffect(() => {
            async function fetchSongs() {
                  try {
                    const response = await fetch(url);
                    const songs = await response.json();
                    setSongs(songs);
                  } catch (err) {
                    console.error(err);
                    setError(true);
                  }
                }
            
                fetchSongs();
              }, [url]);

      return { songs, error }
}