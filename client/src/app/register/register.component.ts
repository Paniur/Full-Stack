import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();
  constructor(private accountService: AccountService) {
    
  }

  register()
  {
    console.log(this.model);
    this.accountService.register(this.model).subscribe({
      next: response =>
      {
        console.log(response);
        this.cancel();
      },
      error: error => console.log(error)
    });
  }

  cancel()
  {
    this.cancelRegister.emit(false);
  }
}
