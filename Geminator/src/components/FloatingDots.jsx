import React, { useEffect, useRef } from "react";

const FloatingDotsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Configurações
    const dots = [];
    const numDots = 300;
    const maxDistance = 100; // Distância máxima para conectar pontos
    const dotRadius = 2;
    const backgroundColor = "#1E1E1E"; // Cor de fundo desejada (ex: cinza escuro)

    // Criar pontos aleatórios
    for (let i = 0; i < numDots; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2, // Velocidade em X
        vy: (Math.random() - 0.5) * 2, // Velocidade em Y
      });
    }

    // Função para desenhar o fundo, os pontos e as conexões
    const draw = () => {
      // Preencher o fundo com a cor desejada
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Desenhar conexões
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(173, 216, 230, ${1 - distance / maxDistance})`; // Cor da linha
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Desenhar pontos
      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = "#ADD8E6"; // Cor dos pontos
        ctx.fill();
      });
    };

    // Função para atualizar a posição dos pontos
    const update = () => {
      dots.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Rebater nas bordas do canvas
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;
      });
    };

    // Loop de animação
    const animate = () => {
      draw();
      update();
      requestAnimationFrame(animate);
    };

    // Iniciar animação
    animate();

    // Redimensionar canvas quando a janela mudar de tamanho
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Configurar tamanho inicial

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Colocar atrás do conteúdo
      }}
    />
  );
};

export default FloatingDotsBackground;