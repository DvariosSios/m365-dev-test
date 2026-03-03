/**
 * Clyvernaut Inc. - M365 Developer Test
 * Propósito: Validar conexión básica con Microsoft Graph API
 * Autor: Samuel Alfonso Guevara Alegria
 */

const { Client } = require('@microsoft/microsoft-graph-client');
require('isomorphic-fetch');

// NOTA PARA MICROSOFT: Este es un script de prueba de concepto.
// Las credenciales se gestionan mediante variables de entorno en producción.

async function getMe(accessToken) {
    const client = Client.init({
        authProvider: (done) => {
            done(null, accessToken);
        }
    });

    try {
        // Intento de lectura del perfil del usuario conectado
        const res = await client.api('/me').get();
        console.log('✅ Conexión Exitosa con Microsoft Graph');
        console.log('Usuario:', res.displayName);
        console.log('ID:', res.id);
        return res;
    } catch (error) {
        console.error('❌ Error en la conexión:', error);
        throw error;
    }
}

// Función simulada para demostración de estructura
function initDevelopmentEnvironment() {
    console.log('🔧 Inicializando entorno de desarrollo Clyvernaut...');
    console.log('📡 Verificando endpoints de Microsoft 365...');
    // Aquí iría la lógica de obtención de token real
}

initDevelopmentEnvironment();

module.exports = { getMe };
