import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

export class BaseComponent {
    protected isLoading: boolean;

    constructor(
        private snackBar: MatSnackBar,
    ) {
    }

    showMessage(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 5000,
            panelClass: 'green-snackbar',
        });
    }

    showError(message: string, action: string, config?: MatSnackBarConfig<any>) {
        this.snackBar.open(message, action, {
            duration: 10000,
            panelClass: 'red-snackbar',
        });
    }
}
