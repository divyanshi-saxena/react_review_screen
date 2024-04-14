import { useContext, useEffect, useRef } from 'react'
import AppContext from '../context/app/appContext';

const DocPreviewer = () => {
  const { sidebarData } = useContext(AppContext);

  const canvasRef = useRef(null)

  // function fitToContainer(canvas) {
  //   canvas.style.width = '100%';
  //   canvas.style.height = '100%';
  //   canvas.width = canvas.offsetWidth;
  //   canvas.height = canvas.offsetHeight;
  // }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    // fitToContainer(canvas)

    // canvas.addEventListener("mousemove", (e) => {
    //   e.preventDefault();
    //   let cposX = e.pageX - canvas.offsetLeft;
    //   let cposY = e.pageY - canvas.offsetTop;
    //   sections.data.sections[0].children.forEach(item => {
    //     let pos;
    //     if (item.content && item.content.position.length > 0) {
    //       pos = item.content.position;
    //       if (cposX >= pos[0] && cposX <= pos[2] && cposY >= pos[1] && cposY <= pos[3]) {
    //         console.log({ cposX, cposY });
    //       }
    //     }
    //   })
    // }, false)

    const img = document.getElementById("accStmt");
    context.drawImage(img, 0, 0);

    //   var hRatio = canvas.width / img.width;
    //   var vRatio = canvas.height / img.height;
    //   var ratio = Math.min(hRatio, vRatio);
    //   var centerShift_x = (canvas.width - img.width * ratio) / 2;
    //   var centerShift_y = (canvas.height - img.height * ratio) / 2;
    //   context.clearRect(0, 0, canvas.width, canvas.height);
    //   context.drawImage(img, 0, 0, img.width, img.height,
    //     centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);

    sidebarData.forEach(item => {
      let pos, x, y, width, height;
      pos = item.position;
      x = pos[0]; y = pos[1]; width = pos[2] - pos[0]; height = pos[3] - pos[1];
      if (item.isChecked) {
        context.beginPath();
        context.rect(x, y, width, height);
        context.strokeStyle = item.color;
        context.stroke();
      }
    })
  }, [sidebarData])

  return (
    <div className="doc-reviewer">
      <canvas ref={canvasRef}
        height="2200" width="1700"
      />
    </div>
  )
}

export default DocPreviewer
