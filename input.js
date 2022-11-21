export class InputHandle{
    constructor(){
        this.keys = []

        window.addEventListener('keydown', e =>{
          
            if((e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'ArrowRight' || e.key === 'ArrowLeft' || e.key === 'Enter') && this.keys.indexOf(e.key) === -1){ //index mostra se ja ta no array

                this.keys.push(e.key)
            }
        })
        window.addEventListener('keyup', e =>{
            
            if(e.key === 'ArrowDown' || 
            e.key === 'ArrowUp' || 
            e.key === 'ArrowRight' || 
            e.key === 'ArrowLeft' || 
            e.key === 'Enter'){

                this.keys.splice(this.keys.indexOf(e.key), 1)
            }
        })
    }
}