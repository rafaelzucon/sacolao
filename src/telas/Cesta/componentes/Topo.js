import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import Texto from "../../../componentes/Texto";
import topo from '../../../../assets/topo.jpg';

export default function Topo({ titulo }){
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>{ titulo }</Texto>
    </>
}

const width = Dimensions.get('screen').width;

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 300,
    },
    titulo:{
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 36,
        lineHeight: 46,
        color: "white",
        fontWeight: "bold",
        padding: 16,
    },
});