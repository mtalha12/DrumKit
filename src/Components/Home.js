import React, { Component } from 'react';
import boom from "../Sounds/boom.wav";
import clap from "../Sounds/clap.wav";
import hihat from "../Sounds/hihat.wav";
import kick from "../Sounds/kick.wav";
import openhat from "../Sounds/openhat.wav";
import ride from "../Sounds/ride.wav";
import snare from "../Sounds/snare.wav";
import tink from "../Sounds/tink.wav";
import tom  from "../Sounds/tom.wav";
import styles from "./styles";
import ButtonComponent from "./Button";

import '../App.css';

class HomeComponent extends Component {
    constructor(){
        super();
        this.state = {

        }
        
    }
    
    componentDidMount(){
        window.addEventListener('keydown',(e)=> this.playSound(e.keyCode))
    }

    playSound = (e) =>{
        console.log(e);
        const audio = document.querySelector(`audio[data-key="${e}"]`);
        console.log(audio);
        const key = document.querySelector(`.key[data-key="${e}"]`);
        console.log(key);
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
        this.addTransition();
    }

    removeTransition =(e, key) =>{
        if (e.propertyName !== 'transform') return;
        key.classList.remove('playing');
      }

      addTransition(){ 
          const keys = document.querySelectorAll('.key');
          keys.forEach(key => {
          key.addEventListener('transitionend',(e)=> this.removeTransition(e, key));
          key.addEventListener('click',  (e)=> {
              if (this.dataset.key) {
                  this.playSound(this.dataset.key);
                }
            })
        })
    }
     


    render(){
        return(
            <div style={styles.keys}>
               <ButtonComponent dataKey="65" name="clap" char="A" />
               <ButtonComponent dataKey="83" name="hithat" char="S" />
               <ButtonComponent dataKey="68" name="kick" char="D" />
               <ButtonComponent dataKey="70" name="openhat" char="F" />
               <ButtonComponent dataKey="71" name="boom" char="G" />
               <ButtonComponent dataKey="72" name="ride" char="H" />
               <ButtonComponent dataKey="74" name="snare" char="J" />
               <ButtonComponent dataKey="75" name="tom" char="K" />
               <ButtonComponent dataKey="76" name="tink" char="L" />
                
                <audio data-key="65" src={clap}></audio>
                <audio data-key="83" src={hihat}></audio>
                <audio data-key="68" src={kick}></audio>
                <audio data-key="70" src={openhat}></audio>
                <audio data-key="71" src={boom}></audio>
                <audio data-key="72" src={ride}></audio>
                <audio data-key="74" src={snare}></audio>
                <audio data-key="75" src={tom}></audio>
                <audio data-key="76" src={tink}></audio>

            </div>
        )
    }
}

export default HomeComponent