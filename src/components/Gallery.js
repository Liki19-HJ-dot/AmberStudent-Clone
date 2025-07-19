// src/components/Gallery.js
export default function Gallery() {
  const images = [
    { src: "/assets/campus-view.jpg", caption: "Beautiful campuses" },
    { src: "/assets/london-studio.jpg", caption: "london-studio" },
    { src: "/assets/manchester-loft.jpg", caption: "manchester-loft" },
    { src: "/assets/social-lounge.jpg", caption: "Social lounges" },
    { src: "/assets/study-room.jpg", caption: "Modern study rooms" }
    
  ];
  return (
    <div style={{display: "flex", gap: "1.5rem", flexWrap: "wrap", marginTop: "2rem"}}>
      {images.map(img => (
        <div key={img.src} style={{width: 250}}>
          <img src={img.src} alt={img.caption} style={{width: "100%", borderRadius: 8}} />
          <div style={{textAlign: "center", marginTop: ".4rem", fontSize: 14, color: "#666"}}>{img.caption}</div>
        </div>
      ))}
    </div>
  );
}
