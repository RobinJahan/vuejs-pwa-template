<template>
  <div class="camera">
    <v-container class="camera-container">
      <video class="video" ref="video"/>
    </v-container>
  </div>
</template>

<script>

export default {
    data() {
        return{
            videoDevices: [],
            mediaStream: null,
            facingMode: "environment"
        }
    },
    methods: {
        async StartRecording(facingMode) {
            this.facingMode = facingMode;
            let video = this.$refs.video;
            this.mediaStream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: facingMode },
            });
            video.srcObject = this.mediaStream;
            return await video.play();
        }
    },
    async mounted() {
        const devices = await navigator.mediaDevices.enumerateDevices();
        this.videoDevices = devices.filter((d) => d.kind === "videoinput");
        await this.StartRecording(
            this.videoDevices.length === 1 ? "user" : "environment"
        );
    },
}
</script>

<style>
.camera-container{
    width: 100vw;
    justify-items: center;
    overflow: hidden;
    display: grid;
    grid-template-columns: [left] 90vw [bs] 5vw [es] 5vw [right];
    padding: 0;
    margin: 0;
}
.video {
    height: 100vh;
    grid-column: left/right;
    grid-row: top / bottom;
    user-select: none;
    max-width: unset;
}
html{
    overflow: hidden !important;
}
</style>

