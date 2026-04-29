import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * PixelatedImage
 * Renders an image with a pixel-art (8-bit / mosaic) effect by downscaling
 * to a low-resolution canvas and re-upscaling with nearest-neighbour sampling.
 *
 * Props:
 *   - src:        image source
 *   - pixelSize:  controls block size (lower = blockier output). Default 12.
 *   - className:  forwarded to the canvas element
 *   - alt:        accessible label (rendered as aria-label since canvas lacks alt)
 */
function PixelatedImage({ src, pixelSize = 12, className = '', alt = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!src) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      if (!w || !h) return;

      const sw = Math.max(1, Math.floor(w / pixelSize));
      const sh = Math.max(1, Math.floor(h / pixelSize));

      canvas.width = w;
      canvas.height = h;

      // Disable smoothing so re-upscale yields hard pixel edges
      ctx.imageSmoothingEnabled = false;
      ctx.mozImageSmoothingEnabled = false;
      ctx.webkitImageSmoothingEnabled = false;
      ctx.msImageSmoothingEnabled = false;

      // Downscale to a tiny offscreen canvas first
      const offscreen = document.createElement('canvas');
      offscreen.width = sw;
      offscreen.height = sh;
      const octx = offscreen.getContext('2d');
      octx.imageSmoothingEnabled = false;
      octx.drawImage(img, 0, 0, sw, sh);

      // Upscale that low-res canvas back to original dimensions
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(offscreen, 0, 0, sw, sh, 0, 0, w, h);
    };

    img.src = src;
    return () => {
      img.onload = null;
    };
  }, [src, pixelSize]);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label={alt}
      className={className}
      style={{ imageRendering: 'pixelated' }}
    />
  );
}

PixelatedImage.propTypes = {
  src: PropTypes.string.isRequired,
  pixelSize: PropTypes.number,
  className: PropTypes.string,
  alt: PropTypes.string,
};

export default PixelatedImage;
