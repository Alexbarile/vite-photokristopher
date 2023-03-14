<script>
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
            errors: {},
            success: false,
            loading: false,
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
            }

            // per non far rinviare l'email all'utente
            this.loading = true;

            // per far togliere gli errori della compilazine del form
            this.errors = {};

            axios.post(`${this.store.baseUrl}/api/contacts`, data).then((response) => {
                if(!response.data.success){
                    this.errors = response.data.errors
                    this.loading = false;
                }
                else{
                    this.name = ''
                    this.surname = ''
                    this.email = ''
                    this.phone = ''
                    this.message = ''
                    this.success = true
                    this.loading = false

                    setTimeout(() => {
                        this.$router.push({'name' : 'thank-you'})
                    }, 5000);
                }
            })
        }
    },
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="text-center">Contatti</h2>
            </div>
            <div class="col-12">
                <h4 class="text-center">Informazioni contatto</h4>
                <div class="row">
                    <div class="col-12">
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
                    
                    <div class="col-12">
                        <div class="text-center">
                            <div>
                                <strong><i class="fas fa-phone me-2">Telefono:</i></strong>
                                0123456789
                            </div>
                            <div>
                                <strong><i class="fas fa-envelope me-2">Email:</i></strong>
                                hello@example.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <h4 class="text-center">Scrivici</h4>
                <form @submit.prevent="sendForm">
                    <div class="row">
                        <div class="col-12 m-3">
                            <label for="nome" class="control-label">Nome</label>
                            <input type="text" class="form-control" :class="{'is-invalid' : errors.name}" name="nome" id="nome" placeholder="Nome" v-model="name">
                            <div v-for="{error, index} in errors.name" :key="`message-error-${index}`" class="text-danger">
                                {{ error }}
                            </div>
                        </div>
                        <div class="col-12 m-3">
                            <label for="cognome" class="control-label">Cognome</label>
                            <input type="text" class="form-control" name="cognome" id="cognome" placeholder="Cognome" v-model="surname">
                            <div v-for="{error, index} in errors.surname" :key="`message-error-${index}`" class="text-danger">
                                {{ error }}
                            </div>
                        </div>
                        <div class="col-12 m-3">
                            <label for="email" class="control-label">Email</label>
                            <input type="text" class="form-control" name="email" id="email" placeholder="Email" v-model="email">
                            <div v-for="{error, index} in errors.email" :key="`message-error-${index}`" class="text-danger">
                                {{ error }}
                            </div>
                        </div>
                        <div class="col-12 m-3">
                            <label for="telefono" class="control-label">Telefono</label>
                            <input type="text" class="form-control" name="telefono" id="telefono" placeholder="Telefono" v-model="phone">
                            <div v-for="{error, index} in errors.phone" :key="`message-error-${index}`" class="text-danger">
                                {{ error }}
                            </div>
                        </div>
                        <div class="col-12 m-3">
                            <label for="messaggio" class="control-label">Messaggio</label>
                            <textarea class="form-control" name="messaggio" id="messaggio" placeholder="Messaggio" v-model="message"></textarea>
                            <div v-for="{error, index} in errors.message" :key="`message-error-${index}`" class="text-danger">
                                {{ error }}
                            </div>
                        </div>
                        <div class="col-12 m-3 d-flex justify-content-center">
                            <button type="submit" class="btn btn-success" :disabled="loading">
                                {{ loading ? 'Invio..' : 'Invia'}}
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


<style lang="scss" scoped>
    
</style>