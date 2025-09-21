// Este código es para agregar movimiento de forma interactiva si lo deseas más dinámico.
document.addEventListener('DOMContentLoaded', function() {
  const flowers = document.querySelectorAll('.flower');

  flowers.forEach(flower => {
    flower.addEventListener('mouseover', () => {
      flower.style.animationPlayState = 'paused';
    });

    flower.addEventListener('mouseleave', () => {
      flower.style.animationPlayState = 'running';
    });
  });
});
