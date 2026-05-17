<?php

namespace App\Services;

use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\UploadedFile;

class CloudinaryService
{
    /**
     * Subir una imagen a Cloudinary.
     *
     * @param UploadedFile $file   Archivo de imagen recibido del formulario.
     * @param string       $folder Carpeta dentro de Cloudinary (ej: 'experiences', 'avatars').
     * @return array               Array con 'url' (URL segura publica) y 'public_id' (para eliminar despues).
     */
    public function upload(UploadedFile $file, string $folder = 'experiences'): array
    {
        $result = Cloudinary::uploadApi()->upload($file->getRealPath(), [
            'folder'         => $folder,
            'transformation' => [
                'quality'      => 'auto',
                'fetch_format' => 'auto',
            ],
        ]);

        return [
            'url'       => $result['secure_url'],
            'public_id' => $result['public_id'],
        ];
    }

    /**
     * Eliminar una imagen de Cloudinary usando su public_id.
     *
     * @param string $publicId Identificador publico de la imagen en Cloudinary.
     * @return bool            true si se elimino correctamente.
     */
    public function delete(string $publicId): bool
    {
        $result = Cloudinary::uploadApi()->destroy($publicId);

        return ($result['result'] ?? '') === 'ok';
    }
}
