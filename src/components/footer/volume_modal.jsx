import VolumeController from "./volume_controller";

function VolumeModal({ audioElementRef, volume, setVolume, closeModal, isVolumeModalOpen }) {

    return (
        <div className="volume_modal" style={{ display: isVolumeModalOpen ? 'flex' : 'none' }}>
          <div className="volume_modal_content">
            <VolumeController audioElementRef={audioElementRef} volume={volume} setVolume={setVolume} />
          </div>
        </div>
      );
}

export default VolumeModal