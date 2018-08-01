import React from 'react';


class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon(this.props.pokemon);
  }

  render() {
    return (
      <ul>
        {this.props.pokemon.map(poke => <li key={poke.id}><img src={poke.image_url} style={{ height: 50, width: 50 }}/> {poke.name}</li>)}
      </ul>
    );
  }
}

export default PokemonIndex;
