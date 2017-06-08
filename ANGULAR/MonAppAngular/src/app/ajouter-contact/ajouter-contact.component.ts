import { Component, Output, EventEmitter } from '@angular/core';
import { Contact } from '../shared/models/contact';

@Component({
  selector: 'app-ajouter-contact',
  templateUrl: './ajouter-contact.component.html',
  styleUrls: ['./ajouter-contact.component.css']
})
export class AjouterContactComponent {

  // Définition de notre évenement
  @Output() unContactEstCree = new EventEmitter();

  // Création d'un nouveau Contact de Type Contact
  nouveauContact: Contact = new Contact(); 
  active: boolean = true;

  // Fonction appeler après le submit du formulaire
  submitContact(){
    // Ici, à la soumission, j'emet mon évènement
    this.unContactEstCree.emit({ contact: this.nouveauContact}); 

    // Je récupère le nouveau Contact
    console.log(this.nouveauContact);

    // Après la soumission, je réinitialise le nouveau contact
    this.nouveauContact = new Contact();

    // Je passe ensuite mon formulaire à false, puis immédiatement après à true, ce qui a pour conséquence de le détruire dans le DOM puis de le re-créer...
    this.active = false; 
    setTimeout(()=> this.active = true, 0); 
  }
}
