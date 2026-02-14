import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  // Uso os signals modernos do Angular para controlar os estados
  isMenuOpen = signal(false);
  isScrolled = signal(false);

  // Função que abre e fecha o menu no celular
  toggleMenu() {
    this.isMenuOpen.update(val => !val);
  }

  // Isso aqui detecta quando o usuário rola a página para baixo
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 50) {
      this.isScrolled.set(true); // Se rolou mais de 50px, muda a cor do header
    } else {
      this.isScrolled.set(false); // Se voltou pro topo, fica transparente
    }
  }
}