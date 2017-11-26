import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: any;
  heroForm: FormGroup;
  states: any;
 

  constructor(private fb: FormBuilder) { 
    
    this.states = ['CA', 'TX'];
    this.hero = {
      id: 1,
      recommended: false,
      name: 'Whirlwind',
      addresses: [
          {
              street: '123 Main', city: 'Anywhere', state: 'CA', zip: '94801', pets: [
                  {
                      name: 'Simba', breed: 'tabby', color: 'silver'
                  }, {
                      name: 'Fuzz', breed: 'cooncat', color: 'black'
                  }
              ]
          },
          {
              street: '456 Maple', city: 'Somewhere', state: 'TX', zip: '23226', pets: [
                  {
                      name: 'Noogie', breed: 'hemalayan', color: 'white'
                  }, {
                      name: 'Dusty', breed: 'Vizsla', color: 'red'
                  }
              ]
          }
      ]
  };
  this.createForm();
}

  
  createForm() {
    this.heroForm = this.fb.group({
      name: '',
      secretLairs: this.fb.array([]),
      power: '',
      sidekick: ''
    });
  }

  

  setAddresses() {
    const control = <FormArray>this.heroForm.controls['secretLairs']; 
    this.hero.addresses.forEach((a, i) => {
      control.push(
        this.fb.group({
          street: a.street,
          city: a.city,
          state: a.state,
          zip: a.zip,
          pets: this.fb.array([])
        })
      );
     const petsControl = (<FormArray>this.heroForm.controls['secretLairs']).at(i).get('pets') as FormArray;
     a.pets.forEach(pet => {
       petsControl.push(
        this.fb.group({
          name: pet.name,
          breed: pet.breed,
          color: pet.color
        })
      );
     });
    });
    
    
  }

  get secretLairs(): FormArray {
    return this.heroForm.get('secretLairs') as FormArray;
  }

  ngOnInit() {
   
    this.setAddresses();
  }

  prepareSaveHero(): any {
    const formModel = this.heroForm.value;

    const secretLairsDeepCopy: any[] = formModel.secretLairs.map((address: any) => {
      Object.assign({}, address);
    });

    const saveHero: any = {
      id: this.hero.id,
      name: formModel.name as string,
      recommended: true,
      addresses: secretLairsDeepCopy
    };

    return saveHero;
  }

 

  onSubmit() {
    this.hero = this.prepareSaveHero();
    
    
  }

}
