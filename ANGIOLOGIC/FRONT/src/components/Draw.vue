<template>
    <div class="drawzone">
      <canvas class='canvas' ref="canvas" width="650" height="650"></canvas>
      <br>
      <button @click="effacerCanvas">Effacer</button>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        drawing: false,
        lastX: 0,
        lastY: 0,
      };
    },
    methods: {
      startDrawing(e) {
        this.drawing = true;
        [this.lastX, this.lastY] = [e.clientX - this.$refs.canvas.offsetLeft, e.clientY - this.$refs.canvas.offsetTop];
      },
      draw(e) {
        if (!this.drawing) return;
        const ctx = this.$refs.canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(this.lastX, this.lastY);
        [this.lastX, this.lastY] = [e.clientX - this.$refs.canvas.offsetLeft, e.clientY - this.$refs.canvas.offsetTop];
        ctx.lineTo(this.lastX, this.lastY);
        ctx.stroke();
      },
      stopDrawing() {
        this.drawing = false;
      },
      effacerCanvas() {
        const ctx = this.$refs.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height);
      },
    },
    mounted() {
      const canvas = this.$refs.canvas;
      canvas.addEventListener('mousedown', this.startDrawing);
      canvas.addEventListener('mousemove', this.draw);
      canvas.addEventListener('mouseup', this.stopDrawing);
      canvas.addEventListener('mouseout', this.stopDrawing);
    },
  };
</script>
  
<style src="../style/Draw.scss" scoped></style>