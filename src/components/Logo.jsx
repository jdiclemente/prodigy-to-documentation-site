function LogomarkPaths() {
  return (
    <g fill="639fab" stroke="#639fab">
		<path fill="#639fab" stroke="none" d="M17.97,10.15l-6.84,3.95v20.64h2.92V23.69l3.92,2.26L24.81,22v-7.9L17.97,10.15z M21.89,20.32
			l-3.92,2.26l-3.92-2.26v-4.52l3.92-2.26l3.92,2.26V20.32z"/>
		<path stroke="none" d="M30.61,18.05l4.97,2.87l-6.32,10.95L24.29,29v5.74H15.3v-1.88h7.11v-4.95l-2.67-1.54l1.88-1.09l6.95,4.01
			l4.44-7.69l-4.28-2.47l-2.66,1.54v-2.17l2.66-1.54l0,0l4.28-2.47L28.57,6.8l-4.28,2.47v3.08l-1.88-1.09V8.19V3.24h-8.88v4.95
			l2.67,1.54l-1.88,1.09L7.36,6.8L2.92,14.5l4.28,2.47l2.66-1.54v2.17l-2.66,1.54l0,0l-4.28,2.47l4.44,7.69l2.51-1.45v2.17
			l-3.2,1.85L0.35,20.92l4.97-2.87l-4.97-2.87L6.67,4.24l4.97,2.87V1.36h12.64v5.74l4.97-2.87l6.32,10.95L30.61,18.05z"/>
    </g>
  )
}

export function Logomark(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 36 36" fill="none" {...props}>
      <LogomarkPaths />
    </svg>
  )
}

export function Logo(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 227 36" fill="none" {...props}>
      <LogomarkPaths />
      <path id="XMLID_17_" fill="#649FAB" d="M44.49,27.81V7.85h8.77c4.19,0,6.52,2.87,6.52,6.25c0,3.38-2.36,6.25-6.52,6.25h-5.27v7.45
	H44.49z M56.18,14.1c0-1.91-1.44-3.17-3.41-3.17h-4.79v6.34h4.79C54.75,17.28,56.18,16.02,56.18,14.1z M74.07,27.81l-4.43-7.45
	h-3.47v7.45h-3.5V7.85h8.77c3.95,0,6.52,2.57,6.52,6.25c0,3.56-2.33,5.47-4.73,5.86l4.88,7.84H74.07z M74.37,14.1
	c0-1.91-1.44-3.17-3.41-3.17h-4.79v6.34h4.79C72.94,17.28,74.37,16.02,74.37,14.1z M80.57,17.84c0-5.95,4.22-10.32,10.2-10.32
	c5.98,0,10.2,4.37,10.2,10.32c0,5.95-4.22,10.32-10.2,10.32C84.78,28.17,80.57,23.8,80.57,17.84z M97.38,17.84
	c0-4.13-2.6-7.21-6.61-7.21c-4.04,0-6.61,3.08-6.61,7.21c0,4.1,2.57,7.21,6.61,7.21C94.78,25.05,97.38,21.94,97.38,17.84z
	 M104.35,27.81V7.85h7.42c6.22,0,10.44,4.13,10.44,9.99c0,5.86-4.22,9.96-10.44,9.96H104.35z M118.62,17.84
	c0-3.86-2.39-6.91-6.85-6.91h-3.92v13.79h3.92C116.11,24.73,118.62,21.61,118.62,17.84z M125.59,27.81V7.85h3.5v19.95H125.59z
	 M132.44,17.84c0-6.25,4.7-10.32,10.47-10.32c3.89,0,6.43,1.85,8.05,4.16l-2.87,1.62c-1.05-1.5-2.93-2.66-5.18-2.66
	c-3.95,0-6.88,3.02-6.88,7.21s2.93,7.24,6.88,7.24c2.03,0,3.83-0.96,4.73-1.79v-3.11h-5.95V17.1h9.45v7.48
	c-1.97,2.18-4.76,3.62-8.23,3.62C137.14,28.2,132.44,24.1,132.44,17.84z M159.99,27.81v-8.29l-7.75-11.67h4.01l5.5,8.56l5.44-8.56
	h4.01l-7.72,11.67v8.29H159.99z"/>
    </svg>
  )
}
