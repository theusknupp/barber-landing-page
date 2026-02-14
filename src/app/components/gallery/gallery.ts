import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importa o registrador de Web Components do Swiper
import { register } from 'swiper/element/bundle';

// Registra os elementos customizados (<swiper-container> e <swiper-slide>)
register();

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  // ISSO AQUI É A MÁGICA: Diz pro Angular não dar erro com tags HTML que ele não conhece nativamente
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery implements OnInit {
  
  // Nossas fotos (Lembre de colocar na pasta public)
  galleryImages = [
    { src: 'gallery-1.jpeg', alt: 'Corte degradê moderno' },
    { src: 'gallery-2.jpeg', alt: 'Barba modelada com toalha quente' },
    { src: 'gallery-3.jpeg', alt: 'Corte clássico na tesoura' },
    { src: 'gallery-4.jpeg', alt: 'Navalhado com design' },
    { src: 'gallery-5.jpeg', alt: 'Ambiente da barbearia' },
    { src: 'gallery-6.jpeg', alt: 'Finalização com produto premium' }
  ];

  ngOnInit() {
    // Apenas inicialização padrão
  }
}