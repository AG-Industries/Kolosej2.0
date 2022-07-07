import express from 'express'
import xmlParser from 'xml2json'
import fetch from "node-fetch";
import fs from 'fs';

export const getMovies = async (req, res) => {
    try {
        const response = await fetch('https://www.kolosej.si/spored/xml/2.0/');
        const xml = await response.text();
        const jsonString = xmlParser.toJson(xml);
        const movies = await JSON.parse(jsonString).movies.movie

        res.status(200).json(movies);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }

}