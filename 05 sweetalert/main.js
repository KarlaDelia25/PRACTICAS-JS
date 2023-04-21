const uno=()=>{
    Swal.fire({
        title: 'Estas seguro?',
        text: "No podrás revertir esto.!",
        icon: 'Advertencia',
        showCancelButton: true,
        confirmButtonColor: '#3085d7',
        cancelButtonColor: '#d33',
        confirmButtonText: 'sí,elimínalo!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Emliminado!',
            'Se eliminó',
            'success'
          )
        }
      })
}

const dos=()=>{
    Swal.fire({
        title: '¿Quieres continuar?',
        icon: 'pregunta',
        iconHtml: '؟',
        confirmButtonText: 'si',
        cancelButtonText: 'no',
        showCancelButton: true,
        showCloseButton: true
      })
}

const tres=()=>{
    Swal.fire({
        title: 'Error!',
        text: 'Quieres continuar?',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
}
const cuatro=()=>{
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Estás seguro?',
        text: "No puedes revertir esto!",
        icon: 'advetencia',
        showCancelButton: true,
        confirmButtonText: 'Si,elimínalo',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Eliminado!',
            'La fila está eliminada',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
    }

const cinco=()=>{
    let timerInterval
Swal.fire({
  title: 'Cerrando',
  html: 'Se cerrará en <b></b> millisegundos.',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
}