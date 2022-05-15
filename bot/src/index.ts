import std from '@jordanbkatz/std';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Discord from 'discord.js';
import Bot from './Bot';

dotenv.config();
const bot = new Bot();

console.log("hello");