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
                                <strong><i class="fas fa-map me-2">Indirizzo:</i></strong>
                                Via, Numero, Città, CAP
                            </div>
                            <div>
                                <strong><i class="fas fa-book me-2">Partita Iva:</i></strong>
                                123456789
                            </div>
                        </div>
                    </div>
                    
                    <div class="col">
                        <div class="text-center">
                            <div>
                                <strong><i class="fas fa-phone me-2">Telefono:</i></strong>
                                0123456789
                            </div>
                            <div>
                                <strong><i class="fas fa-envelope me-2">Email:</i></strong>
                                info@boolean.it
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col m-5">
                <h4 class="text-center">Scrivici</h4>
                <form @submit.prevent="sendForm">
                    <div class="row">
                        <div class="col m-3">
                            <label for="nome" class="control-label">Nome</label>
                            <input type="text" class="form-control" :class="{'is-invalid' : errors.name}" name="nome" id="nome" placeholder="nome" v-model="name">
                            <div v-for="{error, index} in errors.name" :key="`message-error-${index}`" class="text-white">
                                {{ error }}
                            </div>
                        </div>
                        <div class="col m-3">
                            <label for="cognome" class="control-label">Cognome</label>
                            <input type="text" class="form-control" name="cognome" id="cognome" placeholder="cognome" v-model="surname">
                        </div>
                        <div class="col m-3">
                            <label for="email" class="control-label">Email</label>
                            <input type="text" class="form-control" name="email" id="email" placeholder="email" v-model="email">
                        </div>
                        <div class="col m-3">
                            <label for="telefono" class="control-label">Telefono</label>
                            <input type="text" class="form-control" name="telefono" id="telefono" placeholder="telefono" v-model="phone">
                        </div>
                        <div class="col m-3">
                            <button type="submit" class="send-email">
                                Invia
                            </button>

                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
    <div class="container-fluid">
        <h3 class="text-center">GOOGLE MAPS</h3>
    </div>
</template>


<style lang="scss">
    
</style> -->