<template>
    <div class="col-md-4">
        <div class="character-card">
            <div class="card-block">
                <h4 class="card-title">{{character.name}}</h4>
                <p class="card-text">Height: {{character.height}}cm</p>
                <p class="card-text">Mass: {{character.mass}}kg</p>
                <p class="card-text">Hair Color: {{character.hair_color}}</p>
                <p class="card-text">Eye Color: {{character.eye_color}}</p>
                <input type="hidden" id="lastId" v-model="actualId">
                <button 
                    class="btn btn-primary"
                    @click="switchCharacter">
                    Switch
                </button>
                <button 
                    class="hide btn btn-success" 
                    id="btnRollback"
                    @click="rollbackCharacter();hideButton();">
                    Rollback
                </button>
            </div>
        </div>
    </div>
</template>

<style type="text/css">
    @import url("./Character.css");
</style>

<script>
    export default {
        props: [
            'id'
        ], 
        data() {
            return {
                character: {
                },
                actualId: {

                },
                lastId: {

                }
            }
        },
        methods: {
            fetchCharacter(id, event) {
                fetch(`http://swapi.co/api/people/${id}`, {
                    method: 'GET'
                })
                .then(response => response.json())
                .then(json => {
                    this.character = json
                    this.actualId = id;
                    if (event) {
                        const btnRollback = event.srcElement.parentElement.querySelector('#btnRollback')
                        btnRollback.classList.remove('hide')
                    }
                })
            },
            switchCharacter(event) {
                this.lastId = event.srcElement.parentElement.querySelector('#lastId').value
                let random_id = Math.floor(Math.random() * 83) + 1
                this.fetchCharacter(random_id, event)
            },
            rollbackCharacter() {
                this.fetchCharacter(this.lastId)
            },
            hideButton() {
                event.srcElement.classList.add('hide')
            }
        },
        created() {
            this.fetchCharacter(this.id)
        }
        
    }
</script>