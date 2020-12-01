import ResizeSensor from 'css-element-queries/src/ResizeSensor'
import StickySidebar from 'sticky-sidebar'

// o sticky-sidebar espera que o ResizeSensor seja um atributo do root
window.ResizeSensor = ResizeSensor

export const sticky = (...args) => {
  return new StickySidebar(...args)
}
