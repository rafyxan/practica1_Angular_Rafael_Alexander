import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) {}

  private users = [
    { username: 'admin', password: 'admin' },
    { username: 'user1', password: 'user1' },
    { username: 'guest', password: 'guest' },
  ];

  onSubmit(username: string, password: string) {
    // Verifica si el usuario existe
    const userExists = this.users.some(
      (user) => user.username === username && user.password === password
    );

    if (userExists) {

      Swal.fire({
        title: '¡Éxito!',
        text: 'Inicio de sesión exitoso',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
      
      // Navega a la página principal programáticamente
      this.router.navigate(['/main']);
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Usuario o contraseña incorrectos',
        icon: 'error',
        confirmButtonText: 'Intentar de nuevo'
      });
    }
  }
}
