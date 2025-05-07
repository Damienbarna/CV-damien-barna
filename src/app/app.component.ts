import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

declare const feather: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'CV - Barna Damien';
  profileImagePath = '../assets/damii.png';
  
  /**
   * Fonction pour imprimer le CV
   */
  printCV(): void {
    window.print();
  }
  
  /**
   * Gère le téléchargement du CV en PDF
   * Note: Pour une implémentation réelle, vous devrez utiliser une bibliothèque comme jsPDF ou html2pdf
   */
  downloadPDF(): void {
    // Pour l'instant, une simple alerte pour montrer que la fonction est appelée
    alert('Fonctionnalité de téléchargement en PDF à implementer avec jsPDF ou html2pdf');
    
    // Implémentation future:
    // 1. Importer jsPDF ou html2pdf
    // 2. Capturer le contenu HTML du CV
    // 3. Convertir en PDF
    // 4. Déclencher le téléchargement
  }

  ngOnInit() {
    // Initialiser les icônes Feather après le chargement du composant
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }
}
