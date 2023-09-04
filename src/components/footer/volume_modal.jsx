import VolumeController from "./volume_controller";
import { useEffect, useRef } from "react";

function VolumeModal({ audioElementRef, volume, setVolume, toggleVolume, isVisible }) {

  const volumeRef = useRef(null)

  useEffect(() => {
    const handleClick = (event) => {
      if (isVisible) {
        console.log(!event.target.classList)
        if (volumeRef.current && !volumeRef.current.contains(event.target) && !event.target.classList.contains('volume_button')) {
          toggleVolume()
        }
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };

  }, [isVisible, toggleVolume])

  return (
    <div ref={volumeRef} className="volume_modal" style={{ display: isVisible ? 'flex' : 'none' }}>
      <div className="volume_modal_content">
        <VolumeController audioElementRef={audioElementRef} volume={volume} setVolume={setVolume} />
      </div>
    </div>
  );
}

export default VolumeModal