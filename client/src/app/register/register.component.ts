import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();
  constructor(private accountService: AccountService,private toastr: ToastrService) {
    
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
      error: error => {
        this.toastr.error(error.error)
        
      }

    });
  }

  cancel()
  {
    this.cancelRegister.emit(false);
  }
}
