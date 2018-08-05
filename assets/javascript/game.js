$(document).ready(function() {
    $("img").on("click", function(){
        console.log($(this).attr('alt'));
        game.attack($(this).attr('alt'));
        game.analyze();
    })

    var game = {
        attackStrength: 0,
        totalStrength: 0,
        wins: 0,
        losses: 0,
        amethystStrength: 0,
        roseQuartzStrength: 0,
        rubyStrength: 0,
        sapphireStrength: 0,
        initializeGame: function(){
            this.attackStrength = Math.floor(Math.random()*101)+19;
            this.amethystStrength = Math.floor(Math.random()*12)+1;
            this.roseQuartzStrength = Math.floor(Math.random()*12)+1;
            this.rubyStrength = Math.floor(Math.random()*12)+1;
            this.sapphireStrength = Math.floor(Math.random()*12)+1;
            this.totalStrength = 0;
            $("#attack").text(this.attackStrength);
            $("#score").text(0);
        },
        attack: function(gem){
            if(gem === "Amethyst"){
                this.totalStrength += this.amethystStrength;
            }
            else if(gem === "Rose-Quartz"){
                this.totalStrength += this.roseQuartzStrength;
            }
            else if(gem === "Ruby"){
                this.totalStrength += this.rubyStrength;
            }
            else if(gem === "Sapphire"){
                this.totalStrength += this.sapphireStrength;
            }
            $("#score").text(this.totalStrength);
        },
        analyze: function(){
            if(this.totalStrength > this.attackStrength){
                this.losses++;
                $("#losses").text(this.losses);
                this.initializeGame();
            }
            else if(this.totalStrength === this.attackStrength){
                this.wins++;
                $("#wins").text(this.wins);
                this.initializeGame();
            }
        }
    }

    game.initializeGame();
})