"use strict";
exports.__esModule = true;
var module_1 = require();
react;
;
var module_2 = require();
react - native;
;
var Pokemons = function (props) {
    var _a = module_1.useState([]), pokemons = _a[0], setPokemons = _a[1];
    var _b = module_1.useState(''), searchfeild = _b[0], setSearchfeild = _b[1];
    module_1.useEffect(function () {
        fetchPokemons();
    }, []);
    var fetchPokemons = function () {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
            .then(function (response) { return response.json(); })
            .then(function (pokemons) { return setPokemons(pokemons.results); });
    };
    return (module_1["default"].createElement(module_2.View, null,
        module_1["default"].createElement(module_2.View, { style: styles.searchCont },
            module_1["default"].createElement(module_2.TextInput, { style: styles.searchfeild, placeholder: "Search Pokemons", onChangeText: function (value) { return setSearchfeild(value); }, value: searchfeild })),
        module_1["default"].createElement(module_2.ScrollView, null,
            module_1["default"].createElement(module_2.View, { style: styles.container }, pokemons
                .filter(function (pokemon) {
                return pokemon.name.toLowerCase().includes(searchfeild.toLowerCase());
            })
                .map(function (pokemon, index) {
                return (module_1["default"].createElement(module_2.TouchableOpacity, { activeOpacity: 0.5, key: index, style: styles.card, onPress: function () {
                        return props.navigation.navigate('Details', {
                            pokemon: pokemon.name
                        });
                    } },
                    module_1["default"].createElement(module_2.Image, { style: { width: 150, height: 150 }, source: {
                            uri: "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/" + pokemon.name + ".png"
                        } }),
                    module_1["default"].createElement(module_2.Text, null, pokemon.name)));
            })))));
};
