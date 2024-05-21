import { LogLevel } from "../constants/index.js";

export function getFrontendURL() {
    const frontednDevURL = process.env["FRONTEND_DEV_URL"];
    const frontendProdURL = process.env["FRONTEND_PROD_URL"];

    return process.env["NODE_ENV"] === "production" ? frontendProdURL : frontednDevURL;
}

export function getCurrentEnv() {
    return process.env["NODE_ENV"] || "development";
}

export function getCurrentPort() {
    return Number(process.env["PORT"]) || 5000;
}

export function getLogLevel() {
    return process.env["LOG_LEVEL"] || LogLevel.INFO;
}

export function getErrorExposureDepth() {
    return process.env["ERROR_EXPOSURE_DEPTH"] || "BUSINESS";
}
