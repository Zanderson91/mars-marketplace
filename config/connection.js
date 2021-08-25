async function getConnection() {
    const connection = await mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'movies_db'
        }
    );
    return connection;
}

module.exports = getConnection;