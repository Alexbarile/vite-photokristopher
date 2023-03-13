<!-- <script>
import axios from 'axios';
import {store} from '../store';

export default {
    name: 'Contacts',
    data() {
        return {
            name: '',
            surname: '',
            email: '',
            phone: '',
            message: '',
            store,
            errors: null,
        }
    },
    methods: {
        sendForm(){
            const data = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                phone: this.phone,
                message: this.message,
                success: false,
            }

            axios.post(`${this.store.baseUrl}/api/contacts`, data).then((response) => {
                if(!response.data.success){
                    this.errors = response.data.errors
                }
                else{
                    this.name = ''
                    this.surname = ''
                    this.email = ''
                    this.phone = ''
                    this.message = ''
                    this.success = true
                }
            })
        }
    },
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h2 class="text-center">Contatti</h2>
            </div>
            <div class="col">
                <h4 class="text-center">Informazioni contatto</h4>
                <div class="row">
                    <div class="col">
                        <div class="text-center d-flex flex-column">
                            <div>
                                <strong>
    
                                </strong>
                            </div>

                            <div>
                                <strong>
    
                                </strong>
                            </div>

                        </div>
                    </div>
                    
                    <div class="col">
                        <div class="text-center d-flex flex-column">
                            <div>
                                <strong>
    
                                </strong>
                            </div>

                            <div>
                                <strong>
    
                                </strong>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        
    </div>
</template>


<style lang="scss">
    
</style> -->