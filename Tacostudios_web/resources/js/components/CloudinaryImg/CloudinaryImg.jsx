import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, lazyload, responsive } from "@cloudinary/react";
import { format, quality, dpr } from "@cloudinary/url-gen/actions/delivery";
import { auto as autoFormat } from "@cloudinary/url-gen/qualifiers/format";
import { auto as autoQuality } from "@cloudinary/url-gen/qualifiers/quality";
import { auto as autoDpr } from "@cloudinary/url-gen/qualifiers/dpr";

const cld = new Cloudinary({ cloud: { cloudName: "drn7pgqbs" } });

// Extreu el public_id de Cloudinary a partir d'una URL completa.
// Exemple: https://res.cloudinary.com/cloud/image/upload/v123/folder/name.jpg → folder/name
function extractPublicId(url) {
    if (!url) return null;
    const parts = url.split("/upload/");
    if (parts.length < 2) return null;
    const afterUpload = parts[1].replace(/^v\d+\//, "");
    return afterUpload.replace(/\.[^./]+$/, "");
}

// Component que renderitza imatges de Cloudinary amb optimització automàtica.
// Si la URL no és de Cloudinary, retorna un <img> normal amb càrrega lazy.
export default function CloudinaryImg({ src, alt = "", className = "" }) {
    const publicId = extractPublicId(src);

    // Si no és una URL de Cloudinary, renderitzem una imatge estàndard
    if (!publicId) {
        return <img src={src} alt={alt} className={className} loading="lazy" />;
    }

    const img = cld
        .image(publicId)
        // Converteix automàticament al format més eficient (WebP, AVIF…)
        .delivery(format(autoFormat()))
        // Ajusta la qualitat de forma automàtica per reduir el pes sense pèrdua visual
        .delivery(quality(autoQuality()))
        // Adapta la resolució al DPR del dispositiu (pantalles Retina, etc.)
        .delivery(dpr(autoDpr()));

    return (
        <AdvancedImage
            cldImg={img}
            plugins={[
                // Serveix la mida exacta segons l'amplada del contenidor (evita imatges massa grans)
                responsive({ steps: [400, 600, 800, 1000, 1200, 1600, 2000] }),
                // Carrega la imatge només quan entra al viewport (lazy loading)
                lazyload(),
            ]}
            alt={alt}
            className={className}
        />
    );
}
