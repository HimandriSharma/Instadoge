import React from 'react';
import Select from '../api/Select'
export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dogs: {
        breed: props.status
      }
    }
  }

  handleStatusChanged(event) {
    var dogs    = this.state.dogs;
    dogs.breed = event.target.value;

    this.setState({ dogs: dogs });
  }

  handleButtonClicked() {
    console.log(this.state.dogs);
  }

  render() {
    return (
      <div>
        <label>
          Breed:
        </label>
        <select value={this.state.dogs.breed} onChange={this.handleStatusChanged.bind(this)} style={{display:'flex',flexDirection:'column',width:'100%',height:'100%'}}>
          <option value="affenpinscher">
          Affenpinscher
          </option>
          <option value="african">
          African
          </option>
          <option value="airedale">
          Airedale
          </option>
          <option value="akita">
          Akita
          </option><option value="appenzeller">
          Appenzeller
          </option>
          <option value="australian">
          Australian
          </option><option value="basenji">
          Basenji
          </option>
          <option value="beagle">
          Beagle
          </option><option value="bluetick">
          Bluetick
          </option>
          <option value="borzoi">
          Borzoi
          </option><option value="bouvier">
          Bouvier
          </option>
          <option value="boxer">
          Boxer
          </option><option value="brabancon">
          Brabancon
          </option>
          <option value="briard">
          Briard
          </option><option value="buhund">
          Buhund
          </option>
          <option value="bulldog">
          Bull Dog
          </option><option value="bullterrier">
          Bullterrier
          </option>
          <option value="cairn">
          Cairn
          </option><option value="chihuahua">
          Chihuahua
          </option>
          <option value="chow">
          Chow
          </option>
          <option value="clumber">
          Clumber
          </option>
          <option value="cockapoo">
          Cockapoo
          </option>
          <option value="collie">
          Collie
          </option>
          <option value="coonhound">
          Coon Hound
          </option> <option value="corgi">
          Corgi
          </option>
          <option value="cotondetulear">
          Cotondetulear
          </option> <option value="dachshund">
          Dachshund
          </option>
          <option value="dalmatian">
          Dalmatian
          </option> <option value="dane">
          Dane
          </option>
          <option value="deerhound">
          Deerhound
          </option> <option value="dhole">
          Dhole
          </option>
          <option value="dingo">
          Dingo
          </option> <option value="doberman">
          Doberman
          </option>
          <option value="elkhound">
          Elkhound
          </option> <option value="entlebucher">
          Entlebucher
          </option>
          <option value="eskimo">
          Eskimo
          </option> <option value="finnish">
          Finnish
          </option>
          <option value="frise">
          Frise
          </option> <option value="germanshepherd">
          German Shepherd
          </option>
          <option value="greyhound">
          Grey Hound
          </option> 
          <option value="groenendael">
          Groenendael
          </option>
          <option value="havanese">
          Havanese
          </option>
          <option value="hound">
          Hound
          </option>
          <option value="husky">
          Husky
          </option><option value="keeshond">
          Keeshond
          </option>
          <option value="kelpie">
          Kelpie
          </option><option value="komondor">
          Komondor
          </option>
          <option value="kuvasz">
          Kuvasz
          </option><option value="labradoodle">
          Labradoodle
          </option>
          <option value="labrador">
          Labrador
          </option><option value="leonberg">
          Leonberg
          </option>
          <option value="lhasa">
          Lhasa
          </option><option value="malamute">
          Malamute
          </option>
          <option value="malinois">
          Malinois
          </option><option value="maltese">
          Maltese
          </option>
          <option value="mastiff">
          Mastiff
          </option><option value="mexicanhairless">
          Mexicanhairless
          </option>
          <option value="mix">
          Mix
          </option><option value="mountain">
          Mountain
          </option>
          <option value="newfoundland">
          New Foundland
          </option><option value="otterhound">
          Otter Hound
          </option>
          <option value="ovcharka">
          Ovcharka
          </option>
          <option value="papillon">
          Papillon
          </option>
          <option value="pekinese">
          Pekinese
          </option>
          <option value="pembroke">
          Pembroke
          </option>
          <option value="pinscher">
            Pending
          </option>
          <option value="pitbull">
          Pitbull
          </option><option value="pointer">
          Pointer
          </option>
          <option value="pomeranian">
          Pomeranian
          </option><option value="poodle">
          Poodle
          </option>
          <option value="pug">
          Pug
          </option><option value="puggle">
          Puggle
          </option>
          <option value="pyrenees">
          Pyrenees
          </option><option value="redbone">
          Redbone
          </option>
          <option value="retriever">
          Retriever
          </option><option value="ridgeback">
          Ridgeback
          </option>
          <option value="rottweiler">
          Rottweiler
          </option>
          <option value="saluki">
          Saluki
          </option>
          <option value="samoyed">
          Samoyed
          </option>
          <option value="schipperke">
          Schipperke
          </option>
          <option value="schnauzer">
          Schnauzer
          </option>
          <option value="setter">
          Setter
          </option>
          <option value="sheepdog">
          Sheep Dog
          </option>
          <option value="shiba">
          Shiba
          </option>
          <option value="shihtzu">
          Shihtzu
          </option>
          <option value="spaniel">
          Spaniel
          </option>
          <option value="springer">
          Springer
          </option>
          <option value="stbernard">
          Stbernard
          </option>
          <option value="terrier">
          Terrier
          </option>
          <option value="vizsla">
          Vizsla
          </option>
          <option value="waterdog">
          Waterdog
          </option>
          <option value="weimaraner">
          Weimaraner
          </option>
          <option value="whippet">
          Whippet
          </option>
          <option value="wolfhound">
          Wolf Hound
          </option>
        </select>
        <hr/>
        {/* <button onClick={this.handleButtonClicked.bind(this)}>
          Show Images
        </button> */}
        <Select name={this.state.dogs.breed}/>
      </div>
    );
  }
}
