"use strict";
exports.tokens = [
    ["IGNORE", /\-\-.*/i],
    ["EQUALS", /=/i],
    ["TICK", /`/i],
    ["SEMICOLON", /\;/i],
    ["COMMA", /,/i],
    ["RIGHT_PARAN", /\)/i],
    ["LEFT_PARAN", /\(/i],
    ["IDENTIFIER", "[a-zA-Z_1-9][a-zA-Z_1-9]*\s?"],
    ["COLON", /:/i],
    ["SEMICOLON", /;/i],
    ["CHARACTER", /'.'/i],
    ["SQ_STRING", /\'.*?[^\\]\'/i],
    ["DQ_STRING", /\".*?[^\\]\"/i],
    ["INTEGER", /[0-9][0-9]*/i],
    ["FLOAT", /([0-9]*\.[0-9]*|[0-9]+(f|F))/i],
    ["RW_ACCESSIBLE", /(ACCESSIBLE)[^_a-zA-Z]/i],
    ["RW_ACCOUNT", /(ACCOUNT)[^_a-zA-Z]/i],
    ["RW_ACTION", /(ACTION)[^_a-zA-Z]/i],
    ["RW_ADD", /(ADD)[^_a-zA-Z]/i],
    ["RW_AFTER", /(AFTER)[^_a-zA-Z]/i],
    ["RW_AGAINST", /(AGAINST)[^_a-zA-Z]/i],
    ["RW_AGGREGATE", /(AGGREGATE)[^_a-zA-Z]/i],
    ["RW_ALGORITHM", /(ALGORITHM)[^_a-zA-Z]/i],
    ["RW_ALL", /(ALL)[^_a-zA-Z]/i],
    ["RW_ALTER", /(ALTER)[^_a-zA-Z]/i],
    ["RW_ALWAYS", /(ALWAYS)[^_a-zA-Z]/i],
    ["RW_ANALYSE", /(ANALYSE)[^_a-zA-Z]/i],
    ["RW_ANALYZE", /(ANALYZE)[^_a-zA-Z]/i],
    ["RW_AND", /(AND)[^_a-zA-Z]/i],
    ["RW_ANY", /(ANY)[^_a-zA-Z]/i],
    ["RW_AS", /(AS)[^_a-zA-Z]/i],
    ["RW_ASC", /(ASC)[^_a-zA-Z]/i],
    ["RW_ASCII", /(ASCII)[^_a-zA-Z]/i],
    ["RW_ASENSITIVE", /(ASENSITIVE)[^_a-zA-Z]/i],
    ["RW_AT", /(AT)[^_a-zA-Z]/i],
    ["RW_AUTOEXTEND_SIZE", /(AUTOEXTEND_SIZE)[^_a-zA-Z]/i],
    ["RW_AUTO_INCREMENT", /(AUTO_INCREMENT)[^_a-zA-Z]/i],
    ["RW_AVG", /(AVG)[^_a-zA-Z]/i],
    ["RW_AVG_ROW_LENGTH", /(AVG_ROW_LENGTH)[^_a-zA-Z]/i],
    ["RW_BACKUP", /(BACKUP)[^_a-zA-Z]/i],
    ["RW_BEFORE", /(BEFORE)[^_a-zA-Z]/i],
    ["RW_BEGIN", /(BEGIN)[^_a-zA-Z]/i],
    ["RW_BETWEEN", /(BETWEEN)[^_a-zA-Z]/i],
    ["RW_BIGINT", /(BIGINT)[^_a-zA-Z]/i],
    ["RW_BINARY", /(BINARY)[^_a-zA-Z]/i],
    ["RW_BINLOG", /(BINLOG)[^_a-zA-Z]/i],
    ["RW_BIT", /(BIT)[^_a-zA-Z]/i],
    ["RW_BLOB", /(BLOB)[^_a-zA-Z]/i],
    ["RW_BLOCK", /(BLOCK)[^_a-zA-Z]/i],
    ["RW_BOOL", /(BOOL)[^_a-zA-Z]/i],
    ["RW_BOOLEAN", /(BOOLEAN)[^_a-zA-Z]/i],
    ["RW_BOTH", /(BOTH)[^_a-zA-Z]/i],
    ["RW_BTREE", /(BTREE)[^_a-zA-Z]/i],
    ["RW_BY", /(BY)[^_a-zA-Z]/i],
    ["RW_BYTE", /(BYTE)[^_a-zA-Z]/i],
    ["RW_CACHE", /(CACHE)[^_a-zA-Z]/i],
    ["RW_CALL", /(CALL)[^_a-zA-Z]/i],
    ["RW_CASCADE", /(CASCADE)[^_a-zA-Z]/i],
    ["RW_CASCADED", /(CASCADED)[^_a-zA-Z]/i],
    ["RW_CASE", /(CASE)[^_a-zA-Z]/i],
    ["RW_CATALOG_NAME", /(CATALOG_NAME)[^_a-zA-Z]/i],
    ["RW_CHAIN", /(CHAIN)[^_a-zA-Z]/i],
    ["RW_CHANGE", /(CHANGE)[^_a-zA-Z]/i],
    ["RW_CHANGED", /(CHANGED)[^_a-zA-Z]/i],
    ["RW_CHANNEL", /(CHANNEL)[^_a-zA-Z]/i],
    ["RW_CHAR", /(CHAR)[^_a-zA-Z]/i],
    ["RW_CHARACTER", /(CHARACTER)[^_a-zA-Z]/i],
    ["RW_CHARSET", /(CHARSET)[^_a-zA-Z]/i],
    ["RW_CHECK", /(CHECK)[^_a-zA-Z]/i],
    ["RW_CHECKSUM", /(CHECKSUM)[^_a-zA-Z]/i],
    ["RW_CIPHER", /(CIPHER)[^_a-zA-Z]/i],
    ["RW_CLASS_ORIGIN", /(CLASS_ORIGIN)[^_a-zA-Z]/i],
    ["RW_CLIENT", /(CLIENT)[^_a-zA-Z]/i],
    ["RW_CLOSE", /(CLOSE)[^_a-zA-Z]/i],
    ["RW_COALESCE", /(COALESCE)[^_a-zA-Z]/i],
    ["RW_CODE", /(CODE)[^_a-zA-Z]/i],
    ["RW_COLLATE", /(COLLATE)[^_a-zA-Z]/i],
    ["RW_COLLATION", /(COLLATION)[^_a-zA-Z]/i],
    ["RW_COLUMN", /(COLUMN)[^_a-zA-Z]/i],
    ["RW_COLUMNS", /(COLUMNS)[^_a-zA-Z]/i],
    ["RW_COLUMN_FORMAT", /(COLUMN_FORMAT)[^_a-zA-Z]/i],
    ["RW_COLUMN_NAME", /(COLUMN_NAME)[^_a-zA-Z]/i],
    ["RW_COMMENT", /(COMMENT)[^_a-zA-Z]/i],
    ["RW_COMMIT", /(COMMIT)[^_a-zA-Z]/i],
    ["RW_COMMITTED", /(COMMITTED)[^_a-zA-Z]/i],
    ["RW_COMPACT", /(COMPACT)[^_a-zA-Z]/i],
    ["RW_COMPLETION", /(COMPLETION)[^_a-zA-Z]/i],
    ["RW_COMPRESSED", /(COMPRESSED)[^_a-zA-Z]/i],
    ["RW_COMPRESSION", /(COMPRESSION)[^_a-zA-Z]/i],
    ["RW_CONCURRENT", /(CONCURRENT)[^_a-zA-Z]/i],
    ["RW_CONDITION", /(CONDITION)[^_a-zA-Z]/i],
    ["RW_CONNECTION", /(CONNECTION)[^_a-zA-Z]/i],
    ["RW_CONSISTENT", /(CONSISTENT)[^_a-zA-Z]/i],
    ["RW_CONSTRAINT", /(CONSTRAINT)[^_a-zA-Z]/i],
    ["RW_CONSTRAINT_CATALOG", /(CONSTRAINT_CATALOG)[^_a-zA-Z]/i],
    ["RW_CONSTRAINT_NAME", /(CONSTRAINT_NAME)[^_a-zA-Z]/i],
    ["RW_CONSTRAINT_SCHEMA", /(CONSTRAINT_SCHEMA)[^_a-zA-Z]/i],
    ["RW_CONTAINS", /(CONTAINS)[^_a-zA-Z]/i],
    ["RW_CONTEXT", /(CONTEXT)[^_a-zA-Z]/i],
    ["RW_CONTINUE", /(CONTINUE)[^_a-zA-Z]/i],
    ["RW_CONVERT", /(CONVERT)[^_a-zA-Z]/i],
    ["RW_CPU", /(CPU)[^_a-zA-Z]/i],
    ["RW_CREATE", /(CREATE)[^_a-zA-Z]/i],
    ["RW_CROSS", /(CROSS)[^_a-zA-Z]/i],
    ["RW_CUBE", /(CUBE)[^_a-zA-Z]/i],
    ["RW_CURRENT", /(CURRENT)[^_a-zA-Z]/i],
    ["RW_CURRENT_DATE", /(CURRENT_DATE)[^_a-zA-Z]/i],
    ["RW_CURRENT_TIME", /(CURRENT_TIME)[^_a-zA-Z]/i],
    ["RW_CURRENT_TIMESTAMP", /(CURRENT_TIMESTAMP)[^_a-zA-Z]/i],
    ["RW_CURRENT_USER", /(CURRENT_USER)[^_a-zA-Z]/i],
    ["RW_CURSOR", /(CURSOR)[^_a-zA-Z]/i],
    ["RW_CURSOR_NAME", /(CURSOR_NAME)[^_a-zA-Z]/i],
    ["RW_DATA", /(DATA)[^_a-zA-Z]/i],
    ["RW_DATABASE", /(DATABASE)[^_a-zA-Z]/i],
    ["RW_DATABASES", /(DATABASES)[^_a-zA-Z]/i],
    ["RW_DATAFILE", /(DATAFILE)[^_a-zA-Z]/i],
    ["RW_DATE", /(DATE)[^_a-zA-Z]/i],
    ["RW_DATETIME", /(DATETIME)[^_a-zA-Z]/i],
    ["RW_DAY", /(DAY)[^_a-zA-Z]/i],
    ["RW_DAY_HOUR", /(DAY_HOUR)[^_a-zA-Z]/i],
    ["RW_DAY_MICROSECOND", /(DAY_MICROSECOND)[^_a-zA-Z]/i],
    ["RW_DAY_MINUTE", /(DAY_MINUTE)[^_a-zA-Z]/i],
    ["RW_DAY_SECOND", /(DAY_SECOND)[^_a-zA-Z]/i],
    ["RW_DEALLOCATE", /(DEALLOCATE)[^_a-zA-Z]/i],
    ["RW_DEC", /(DEC)[^_a-zA-Z]/i],
    ["RW_DECIMAL", /(DECIMAL)[^_a-zA-Z]/i],
    ["RW_DECLARE", /(DECLARE)[^_a-zA-Z]/i],
    ["RW_DEFAULT", /(DEFAULT)[^_a-zA-Z]/i],
    ["RW_DEFAULT_AUTH", /(DEFAULT_AUTH)[^_a-zA-Z]/i],
    ["RW_DEFINER", /(DEFINER)[^_a-zA-Z]/i],
    ["RW_DELAYED", /(DELAYED)[^_a-zA-Z]/i],
    ["RW_DELAY_KEY_WRITE", /(DELAY_KEY_WRITE)[^_a-zA-Z]/i],
    ["RW_DELETE", /(DELETE)[^_a-zA-Z]/i],
    ["RW_DESC", /(DESC)[^_a-zA-Z]/i],
    ["RW_DESCRIBE", /(DESCRIBE)[^_a-zA-Z]/i],
    ["RW_DES_KEY_FILE", /(DES_KEY_FILE)[^_a-zA-Z]/i],
    ["RW_DETERMINISTIC", /(DETERMINISTIC)[^_a-zA-Z]/i],
    ["RW_DIAGNOSTICS", /(DIAGNOSTICS)[^_a-zA-Z]/i],
    ["RW_DIRECTORY", /(DIRECTORY)[^_a-zA-Z]/i],
    ["RW_DISABLE", /(DISABLE)[^_a-zA-Z]/i],
    ["RW_DISCARD", /(DISCARD)[^_a-zA-Z]/i],
    ["RW_DISK", /(DISK)[^_a-zA-Z]/i],
    ["RW_DISTINCT", /(DISTINCT)[^_a-zA-Z]/i],
    ["RW_DISTINCTROW", /(DISTINCTROW)[^_a-zA-Z]/i],
    ["RW_DIV", /(DIV)[^_a-zA-Z]/i],
    ["RW_DO", /(DO)[^_a-zA-Z]/i],
    ["RW_DOUBLE", /(DOUBLE)[^_a-zA-Z]/i],
    ["RW_DROP", /(DROP)[^_a-zA-Z]/i],
    ["RW_DUAL", /(DUAL)[^_a-zA-Z]/i],
    ["RW_DUMPFILE", /(DUMPFILE)[^_a-zA-Z]/i],
    ["RW_DUPLICATE", /(DUPLICATE)[^_a-zA-Z]/i],
    ["RW_DYNAMIC", /(DYNAMIC)[^_a-zA-Z]/i],
    ["RW_EACH", /(EACH)[^_a-zA-Z]/i],
    ["RW_ELSE", /(ELSE)[^_a-zA-Z]/i],
    ["RW_ELSEIF", /(ELSEIF)[^_a-zA-Z]/i],
    ["RW_ENABLE", /(ENABLE)[^_a-zA-Z]/i],
    ["RW_ENCLOSED", /(ENCLOSED)[^_a-zA-Z]/i],
    ["RW_ENCRYPTION", /(ENCRYPTION)[^_a-zA-Z]/i],
    ["RW_END", /(END)[^_a-zA-Z]/i],
    ["RW_ENDS", /(ENDS)[^_a-zA-Z]/i],
    ["RW_ENGINE", /(ENGINE)[^_a-zA-Z]/i],
    ["RW_ENGINES", /(ENGINES)[^_a-zA-Z]/i],
    ["RW_ENUM", /(ENUM)[^_a-zA-Z]/i],
    ["RW_ERROR", /(ERROR)[^_a-zA-Z]/i],
    ["RW_ERRORS", /(ERRORS)[^_a-zA-Z]/i],
    ["RW_ESCAPE", /(ESCAPE)[^_a-zA-Z]/i],
    ["RW_ESCAPED", /(ESCAPED)[^_a-zA-Z]/i],
    ["RW_EVENT", /(EVENT)[^_a-zA-Z]/i],
    ["RW_EVENTS", /(EVENTS)[^_a-zA-Z]/i],
    ["RW_EVERY", /(EVERY)[^_a-zA-Z]/i],
    ["RW_EXCHANGE", /(EXCHANGE)[^_a-zA-Z]/i],
    ["RW_EXECUTE", /(EXECUTE)[^_a-zA-Z]/i],
    ["RW_EXISTS", /(EXISTS)[^_a-zA-Z]/i],
    ["RW_EXIT", /(EXIT)[^_a-zA-Z]/i],
    ["RW_EXPANSION", /(EXPANSION)[^_a-zA-Z]/i],
    ["RW_EXPIRE", /(EXPIRE)[^_a-zA-Z]/i],
    ["RW_EXPLAIN", /(EXPLAIN)[^_a-zA-Z]/i],
    ["RW_EXPORT", /(EXPORT)[^_a-zA-Z]/i],
    ["RW_EXTENDED", /(EXTENDED)[^_a-zA-Z]/i],
    ["RW_EXTENT_SIZE", /(EXTENT_SIZE)[^_a-zA-Z]/i],
    ["RW_FALSE", /(FALSE)[^_a-zA-Z]/i],
    ["RW_FAST", /(FAST)[^_a-zA-Z]/i],
    ["RW_FAULTS", /(FAULTS)[^_a-zA-Z]/i],
    ["RW_FETCH", /(FETCH)[^_a-zA-Z]/i],
    ["RW_FIELDS", /(FIELDS)[^_a-zA-Z]/i],
    ["RW_FILE", /(FILE)[^_a-zA-Z]/i],
    ["RW_FILE_BLOCK_SIZE", /(FILE_BLOCK_SIZE)[^_a-zA-Z]/i],
    ["RW_FILTER", /(FILTER)[^_a-zA-Z]/i],
    ["RW_FIRST", /(FIRST)[^_a-zA-Z]/i],
    ["RW_FIXED", /(FIXED)[^_a-zA-Z]/i],
    ["RW_FLOAT", /(FLOAT)[^_a-zA-Z]/i],
    ["RW_FLOAT4", /(FLOAT4)[^_a-zA-Z]/i],
    ["RW_FLOAT8", /(FLOAT8)[^_a-zA-Z]/i],
    ["RW_FLUSH", /(FLUSH)[^_a-zA-Z]/i],
    ["RW_FOLLOWS", /(FOLLOWS)[^_a-zA-Z]/i],
    ["RW_FOR", /(FOR)[^_a-zA-Z]/i],
    ["RW_FORCE", /(FORCE)[^_a-zA-Z]/i],
    ["RW_FOREIGN", /(FOREIGN)[^_a-zA-Z]/i],
    ["RW_FORMAT", /(FORMAT)[^_a-zA-Z]/i],
    ["RW_FOUND", /(FOUND)[^_a-zA-Z]/i],
    ["RW_FROM", /(FROM)[^_a-zA-Z]/i],
    ["RW_FULL", /(FULL)[^_a-zA-Z]/i],
    ["RW_FULLTEXT", /(FULLTEXT)[^_a-zA-Z]/i],
    ["RW_FUNCTION", /(FUNCTION)[^_a-zA-Z]/i],
    ["RW_GENERAL", /(GENERAL)[^_a-zA-Z]/i],
    ["RW_GENERATED", /(GENERATED)[^_a-zA-Z]/i],
    ["RW_GEOMETRY", /(GEOMETRY)[^_a-zA-Z]/i],
    ["RW_GEOMETRYCOLLECTION", /(GEOMETRYCOLLECTION)[^_a-zA-Z]/i],
    ["RW_GET", /(GET)[^_a-zA-Z]/i],
    ["RW_GET_FORMAT", /(GET_FORMAT)[^_a-zA-Z]/i],
    ["RW_GLOBAL", /(GLOBAL)[^_a-zA-Z]/i],
    ["RW_GRANT", /(GRANT)[^_a-zA-Z]/i],
    ["RW_GRANTS", /(GRANTS)[^_a-zA-Z]/i],
    ["RW_GROUP", /(GROUP)[^_a-zA-Z]/i],
    ["RW_GROUP_REPLICATION", /(GROUP_REPLICATION)[^_a-zA-Z]/i],
    ["RW_HANDLER", /(HANDLER)[^_a-zA-Z]/i],
    ["RW_HASH", /(HASH)[^_a-zA-Z]/i],
    ["RW_HAVING", /(HAVING)[^_a-zA-Z]/i],
    ["RW_HELP", /(HELP)[^_a-zA-Z]/i],
    ["RW_HIGH_PRIORITY", /(HIGH_PRIORITY)[^_a-zA-Z]/i],
    ["RW_HOST", /(HOST)[^_a-zA-Z]/i],
    ["RW_HOSTS", /(HOSTS)[^_a-zA-Z]/i],
    ["RW_HOUR", /(HOUR)[^_a-zA-Z]/i],
    ["RW_HOUR_MICROSECOND", /(HOUR_MICROSECOND)[^_a-zA-Z]/i],
    ["RW_HOUR_MINUTE", /(HOUR_MINUTE)[^_a-zA-Z]/i],
    ["RW_HOUR_SECOND", /(HOUR_SECOND)[^_a-zA-Z]/i],
    ["RW_IDENTIFIED", /(IDENTIFIED)[^_a-zA-Z]/i],
    ["RW_IF", /(IF)[^_a-zA-Z]/i],
    ["RW_IGNORE", /(IGNORE)[^_a-zA-Z]/i],
    ["RW_IGNORE_SERVER_IDS", /(IGNORE_SERVER_IDS)[^_a-zA-Z]/i],
    ["RW_IMPORT", /(IMPORT)[^_a-zA-Z]/i],
    ["RW_IN", /(IN)[^_a-zA-Z]/i],
    ["RW_INDEX", /(INDEX)[^_a-zA-Z]/i],
    ["RW_INDEXES", /(INDEXES)[^_a-zA-Z]/i],
    ["RW_INFILE", /(INFILE)[^_a-zA-Z]/i],
    ["RW_INITIAL_SIZE", /(INITIAL_SIZE)[^_a-zA-Z]/i],
    ["RW_INNER", /(INNER)[^_a-zA-Z]/i],
    ["RW_INOUT", /(INOUT)[^_a-zA-Z]/i],
    ["RW_INSENSITIVE", /(INSENSITIVE)[^_a-zA-Z]/i],
    ["RW_INSERT", /(INSERT)[^_a-zA-Z]/i],
    ["RW_INSERT_METHOD", /(INSERT_METHOD)[^_a-zA-Z]/i],
    ["RW_INSTALL", /(INSTALL)[^_a-zA-Z]/i],
    ["RW_INSTANCE", /(INSTANCE)[^_a-zA-Z]/i],
    ["RW_INT", /(INT)[^_a-zA-Z]/i],
    ["RW_INT1", /(INT1)[^_a-zA-Z]/i],
    ["RW_INT2", /(INT2)[^_a-zA-Z]/i],
    ["RW_INT3", /(INT3)[^_a-zA-Z]/i],
    ["RW_INT4", /(INT4)[^_a-zA-Z]/i],
    ["RW_INT8", /(INT8)[^_a-zA-Z]/i],
    ["RW_INTEGER", /(INTEGER)[^_a-zA-Z]/i],
    ["RW_INTERVAL", /(INTERVAL)[^_a-zA-Z]/i],
    ["RW_INTO", /(INTO)[^_a-zA-Z]/i],
    ["RW_INVOKER", /(INVOKER)[^_a-zA-Z]/i],
    ["RW_IO", /(IO)[^_a-zA-Z]/i],
    ["RW_IO_AFTER_GTIDS", /(IO_AFTER_GTIDS)[^_a-zA-Z]/i],
    ["RW_IO_BEFORE_GTIDS", /(IO_BEFORE_GTIDS)[^_a-zA-Z]/i],
    ["RW_IO_THREAD", /(IO_THREAD)[^_a-zA-Z]/i],
    ["RW_IPC", /(IPC)[^_a-zA-Z]/i],
    ["RW_IS", /(IS)[^_a-zA-Z]/i],
    ["RW_ISOLATION", /(ISOLATION)[^_a-zA-Z]/i],
    ["RW_ISSUER", /(ISSUER)[^_a-zA-Z]/i],
    ["RW_ITERATE", /(ITERATE)[^_a-zA-Z]/i],
    ["RW_JOIN", /(JOIN)[^_a-zA-Z]/i],
    ["RW_JSON", /(JSON)[^_a-zA-Z]/i],
    ["RW_KEY", /(KEY)[^_a-zA-Z]/i],
    ["RW_KEYS", /(KEYS)[^_a-zA-Z]/i],
    ["RW_KEY_BLOCK_SIZE", /(KEY_BLOCK_SIZE)[^_a-zA-Z]/i],
    ["RW_KILL", /(KILL)[^_a-zA-Z]/i],
    ["RW_LANGUAGE", /(LANGUAGE)[^_a-zA-Z]/i],
    ["RW_LAST", /(LAST)[^_a-zA-Z]/i],
    ["RW_LEADING", /(LEADING)[^_a-zA-Z]/i],
    ["RW_LEAVE", /(LEAVE)[^_a-zA-Z]/i],
    ["RW_LEAVES", /(LEAVES)[^_a-zA-Z]/i],
    ["RW_LEFT", /(LEFT)[^_a-zA-Z]/i],
    ["RW_LESS", /(LESS)[^_a-zA-Z]/i],
    ["RW_LEVEL", /(LEVEL)[^_a-zA-Z]/i],
    ["RW_LIKE", /(LIKE)[^_a-zA-Z]/i],
    ["RW_LIMIT", /(LIMIT)[^_a-zA-Z]/i],
    ["RW_LINEAR", /(LINEAR)[^_a-zA-Z]/i],
    ["RW_LINES", /(LINES)[^_a-zA-Z]/i],
    ["RW_LINESTRING", /(LINESTRING)[^_a-zA-Z]/i],
    ["RW_LIST", /(LIST)[^_a-zA-Z]/i],
    ["RW_LOAD", /(LOAD)[^_a-zA-Z]/i],
    ["RW_LOCAL", /(LOCAL)[^_a-zA-Z]/i],
    ["RW_LOCALTIME", /(LOCALTIME)[^_a-zA-Z]/i],
    ["RW_LOCALTIMESTAMP", /(LOCALTIMESTAMP)[^_a-zA-Z]/i],
    ["RW_LOCK", /(LOCK)[^_a-zA-Z]/i],
    ["RW_LOCKS", /(LOCKS)[^_a-zA-Z]/i],
    ["RW_LOGFILE", /(LOGFILE)[^_a-zA-Z]/i],
    ["RW_LOGS", /(LOGS)[^_a-zA-Z]/i],
    ["RW_LONG", /(LONG)[^_a-zA-Z]/i],
    ["RW_LONGBLOB", /(LONGBLOB)[^_a-zA-Z]/i],
    ["RW_LONGTEXT", /(LONGTEXT)[^_a-zA-Z]/i],
    ["RW_LOOP", /(LOOP)[^_a-zA-Z]/i],
    ["RW_LOW_PRIORITY", /(LOW_PRIORITY)[^_a-zA-Z]/i],
    ["RW_MASTER", /(MASTER)[^_a-zA-Z]/i],
    ["RW_MASTER_AUTO_POSITION", /(MASTER_AUTO_POSITION)[^_a-zA-Z]/i],
    ["RW_MASTER_BIND", /(MASTER_BIND)[^_a-zA-Z]/i],
    ["RW_MASTER_CONNECT_RETRY", /(MASTER_CONNECT_RETRY)[^_a-zA-Z]/i],
    ["RW_MASTER_DELAY", /(MASTER_DELAY)[^_a-zA-Z]/i],
    ["RW_MASTER_HEARTBEAT_PERIOD", /(MASTER_HEARTBEAT_PERIOD)[^_a-zA-Z]/i],
    ["RW_MASTER_HOST", /(MASTER_HOST)[^_a-zA-Z]/i],
    ["RW_MASTER_LOG_FILE", /(MASTER_LOG_FILE)[^_a-zA-Z]/i],
    ["RW_MASTER_LOG_POS", /(MASTER_LOG_POS)[^_a-zA-Z]/i],
    ["RW_MASTER_PASSWORD", /(MASTER_PASSWORD)[^_a-zA-Z]/i],
    ["RW_MASTER_PORT", /(MASTER_PORT)[^_a-zA-Z]/i],
    ["RW_MASTER_RETRY_COUNT", /(MASTER_RETRY_COUNT)[^_a-zA-Z]/i],
    ["RW_MASTER_SERVER_ID", /(MASTER_SERVER_ID)[^_a-zA-Z]/i],
    ["RW_MASTER_SSL", /(MASTER_SSL)[^_a-zA-Z]/i],
    ["RW_MASTER_SSL_CA", /(MASTER_SSL_CA)[^_a-zA-Z]/i],
    ["RW_MASTER_SSL_CAPATH", /(MASTER_SSL_CAPATH)[^_a-zA-Z]/i],
    ["RW_MASTER_SSL_CERT", /(MASTER_SSL_CERT)[^_a-zA-Z]/i],
    ["RW_MASTER_SSL_CIPHER", /(MASTER_SSL_CIPHER)[^_a-zA-Z]/i],
    ["RW_MASTER_SSL_CRL", /(MASTER_SSL_CRL)[^_a-zA-Z]/i],
    ["RW_MASTER_SSL_CRLPATH", /(MASTER_SSL_CRLPATH)[^_a-zA-Z]/i],
    ["RW_MASTER_SSL_KEY", /(MASTER_SSL_KEY)[^_a-zA-Z]/i],
    ["RW_MASTER_SSL_VERIFY_SERVER_CERT", /(MASTER_SSL_VERIFY_SERVER_CERT)[^_a-zA-Z]/i],
    ["RW_MASTER_TLS_VERSION", /(MASTER_TLS_VERSION)[^_a-zA-Z]/i],
    ["RW_MASTER_USER", /(MASTER_USER)[^_a-zA-Z]/i],
    ["RW_MATCH", /(MATCH)[^_a-zA-Z]/i],
    ["RW_MAXVALUE", /(MAXVALUE)[^_a-zA-Z]/i],
    ["RW_MAX_CONNECTIONS_PER_HOUR", /(MAX_CONNECTIONS_PER_HOUR)[^_a-zA-Z]/i],
    ["RW_MAX_QUERIES_PER_HOUR", /(MAX_QUERIES_PER_HOUR)[^_a-zA-Z]/i],
    ["RW_MAX_ROWS", /(MAX_ROWS)[^_a-zA-Z]/i],
    ["RW_MAX_SIZE", /(MAX_SIZE)[^_a-zA-Z]/i],
    ["RW_MAX_STATEMENT_TIME", /(MAX_STATEMENT_TIME)[^_a-zA-Z]/i],
    ["RW_MAX_UPDATES_PER_HOUR", /(MAX_UPDATES_PER_HOUR)[^_a-zA-Z]/i],
    ["RW_MAX_USER_CONNECTIONS", /(MAX_USER_CONNECTIONS)[^_a-zA-Z]/i],
    ["RW_MEDIUM", /(MEDIUM)[^_a-zA-Z]/i],
    ["RW_MEDIUMBLOB", /(MEDIUMBLOB)[^_a-zA-Z]/i],
    ["RW_MEDIUMINT", /(MEDIUMINT)[^_a-zA-Z]/i],
    ["RW_MEDIUMTEXT", /(MEDIUMTEXT)[^_a-zA-Z]/i],
    ["RW_MEMORY", /(MEMORY)[^_a-zA-Z]/i],
    ["RW_MERGE", /(MERGE)[^_a-zA-Z]/i],
    ["RW_MESSAGE_TEXT", /(MESSAGE_TEXT)[^_a-zA-Z]/i],
    ["RW_MICROSECOND", /(MICROSECOND)[^_a-zA-Z]/i],
    ["RW_MIDDLEINT", /(MIDDLEINT)[^_a-zA-Z]/i],
    ["RW_MIGRATE", /(MIGRATE)[^_a-zA-Z]/i],
    ["RW_MINUTE", /(MINUTE)[^_a-zA-Z]/i],
    ["RW_MINUTE_MICROSECOND", /(MINUTE_MICROSECOND)[^_a-zA-Z]/i],
    ["RW_MINUTE_SECOND", /(MINUTE_SECOND)[^_a-zA-Z]/i],
    ["RW_MIN_ROWS", /(MIN_ROWS)[^_a-zA-Z]/i],
    ["RW_MOD", /(MOD)[^_a-zA-Z]/i],
    ["RW_MODE", /(MODE)[^_a-zA-Z]/i],
    ["RW_MODIFIES", /(MODIFIES)[^_a-zA-Z]/i],
    ["RW_MODIFY", /(MODIFY)[^_a-zA-Z]/i],
    ["RW_MONTH", /(MONTH)[^_a-zA-Z]/i],
    ["RW_MULTILINESTRING", /(MULTILINESTRING)[^_a-zA-Z]/i],
    ["RW_MULTIPOINT", /(MULTIPOINT)[^_a-zA-Z]/i],
    ["RW_MULTIPOLYGON", /(MULTIPOLYGON)[^_a-zA-Z]/i],
    ["RW_MUTEX", /(MUTEX)[^_a-zA-Z]/i],
    ["RW_MYSQL_ERRNO", /(MYSQL_ERRNO)[^_a-zA-Z]/i],
    ["RW_NAME", /(NAME)[^_a-zA-Z]/i],
    ["RW_NAMES", /(NAMES)[^_a-zA-Z]/i],
    ["RW_NATIONAL", /(NATIONAL)[^_a-zA-Z]/i],
    ["RW_NATURAL", /(NATURAL)[^_a-zA-Z]/i],
    ["RW_NCHAR", /(NCHAR)[^_a-zA-Z]/i],
    ["RW_NDB", /(NDB)[^_a-zA-Z]/i],
    ["RW_NDBCLUSTER", /(NDBCLUSTER)[^_a-zA-Z]/i],
    ["RW_NEVER", /(NEVER)[^_a-zA-Z]/i],
    ["RW_NEW", /(NEW)[^_a-zA-Z]/i],
    ["RW_NEXT", /(NEXT)[^_a-zA-Z]/i],
    ["RW_NO", /(NO)[^_a-zA-Z]/i],
    ["RW_NODEGROUP", /(NODEGROUP)[^_a-zA-Z]/i],
    ["RW_NONBLOCKING", /(NONBLOCKING)[^_a-zA-Z]/i],
    ["RW_NONE", /(NONE)[^_a-zA-Z]/i],
    ["RW_NOT", /(NOT)[^_a-zA-Z]/i],
    ["RW_NO_WAIT", /(NO_WAIT)[^_a-zA-Z]/i],
    ["RW_NO_WRITE_TO_BINLOG", /(NO_WRITE_TO_BINLOG)[^_a-zA-Z]/i],
    ["RW_NULL", /(NULL)[^_a-zA-Z]/i],
    ["RW_NUMBER", /(NUMBER)[^_a-zA-Z]/i],
    ["RW_NUMERIC", /(NUMERIC)[^_a-zA-Z]/i],
    ["RW_NVARCHAR", /(NVARCHAR)[^_a-zA-Z]/i],
    ["RW_OFFSET", /(OFFSET)[^_a-zA-Z]/i],
    ["RW_OLD_PASSWORD", /(OLD_PASSWORD)[^_a-zA-Z]/i],
    ["RW_ON", /(ON)[^_a-zA-Z]/i],
    ["RW_ONE", /(ONE)[^_a-zA-Z]/i],
    ["RW_ONLY", /(ONLY)[^_a-zA-Z]/i],
    ["RW_OPEN", /(OPEN)[^_a-zA-Z]/i],
    ["RW_OPTIMIZE", /(OPTIMIZE)[^_a-zA-Z]/i],
    ["RW_OPTIMIZER_COSTS", /(OPTIMIZER_COSTS)[^_a-zA-Z]/i],
    ["RW_OPTION", /(OPTION)[^_a-zA-Z]/i],
    ["RW_OPTIONALLY", /(OPTIONALLY)[^_a-zA-Z]/i],
    ["RW_OPTIONS", /(OPTIONS)[^_a-zA-Z]/i],
    ["RW_OR", /(OR)[^_a-zA-Z]/i],
    ["RW_ORDER", /(ORDER)[^_a-zA-Z]/i],
    ["RW_OUT", /(OUT)[^_a-zA-Z]/i],
    ["RW_OUTER", /(OUTER)[^_a-zA-Z]/i],
    ["RW_OUTFILE", /(OUTFILE)[^_a-zA-Z]/i],
    ["RW_OWNER", /(OWNER)[^_a-zA-Z]/i],
    ["RW_PACK_KEYS", /(PACK_KEYS)[^_a-zA-Z]/i],
    ["RW_PAGE", /(PAGE)[^_a-zA-Z]/i],
    ["RW_PARSER", /(PARSER)[^_a-zA-Z]/i],
    ["RW_PARSE_GCOL_EXPR", /(PARSE_GCOL_EXPR)[^_a-zA-Z]/i],
    ["RW_PARTIAL", /(PARTIAL)[^_a-zA-Z]/i],
    ["RW_PARTITION", /(PARTITION)[^_a-zA-Z]/i],
    ["RW_PARTITIONING", /(PARTITIONING)[^_a-zA-Z]/i],
    ["RW_PARTITIONS", /(PARTITIONS)[^_a-zA-Z]/i],
    ["RW_PASSWORD", /(PASSWORD)[^_a-zA-Z]/i],
    ["RW_PHASE", /(PHASE)[^_a-zA-Z]/i],
    ["RW_PLUGIN", /(PLUGIN)[^_a-zA-Z]/i],
    ["RW_PLUGINS", /(PLUGINS)[^_a-zA-Z]/i],
    ["RW_PLUGIN_DIR", /(PLUGIN_DIR)[^_a-zA-Z]/i],
    ["RW_POINT", /(POINT)[^_a-zA-Z]/i],
    ["RW_POLYGON", /(POLYGON)[^_a-zA-Z]/i],
    ["RW_PORT", /(PORT)[^_a-zA-Z]/i],
    ["RW_PRECEDES", /(PRECEDES)[^_a-zA-Z]/i],
    ["RW_PRECISION", /(PRECISION)[^_a-zA-Z]/i],
    ["RW_PREPARE", /(PREPARE)[^_a-zA-Z]/i],
    ["RW_PRESERVE", /(PRESERVE)[^_a-zA-Z]/i],
    ["RW_PREV", /(PREV)[^_a-zA-Z]/i],
    ["RW_PRIMARY", /(PRIMARY)[^_a-zA-Z]/i],
    ["RW_PRIVILEGES", /(PRIVILEGES)[^_a-zA-Z]/i],
    ["RW_PROCEDURE", /(PROCEDURE)[^_a-zA-Z]/i],
    ["RW_PROCESSLIST", /(PROCESSLIST)[^_a-zA-Z]/i],
    ["RW_PROFILE", /(PROFILE)[^_a-zA-Z]/i],
    ["RW_PROFILES", /(PROFILES)[^_a-zA-Z]/i],
    ["RW_PROXY", /(PROXY)[^_a-zA-Z]/i],
    ["RW_PURGE", /(PURGE)[^_a-zA-Z]/i],
    ["RW_QUARTER", /(QUARTER)[^_a-zA-Z]/i],
    ["RW_QUERY", /(QUERY)[^_a-zA-Z]/i],
    ["RW_QUICK", /(QUICK)[^_a-zA-Z]/i],
    ["RW_RANGE", /(RANGE)[^_a-zA-Z]/i],
    ["RW_READ", /(READ)[^_a-zA-Z]/i],
    ["RW_READS", /(READS)[^_a-zA-Z]/i],
    ["RW_READ_ONLY", /(READ_ONLY)[^_a-zA-Z]/i],
    ["RW_READ_WRITE", /(READ_WRITE)[^_a-zA-Z]/i],
    ["RW_REAL", /(REAL)[^_a-zA-Z]/i],
    ["RW_REBUILD", /(REBUILD)[^_a-zA-Z]/i],
    ["RW_RECOVER", /(RECOVER)[^_a-zA-Z]/i],
    ["RW_REDOFILE", /(REDOFILE)[^_a-zA-Z]/i],
    ["RW_REDO_BUFFER_SIZE", /(REDO_BUFFER_SIZE)[^_a-zA-Z]/i],
    ["RW_REDUNDANT", /(REDUNDANT)[^_a-zA-Z]/i],
    ["RW_REFERENCES", /(REFERENCES)[^_a-zA-Z]/i],
    ["RW_REGEXP", /(REGEXP)[^_a-zA-Z]/i],
    ["RW_RELAY", /(RELAY)[^_a-zA-Z]/i],
    ["RW_RELAYLOG", /(RELAYLOG)[^_a-zA-Z]/i],
    ["RW_RELAY_LOG_FILE", /(RELAY_LOG_FILE)[^_a-zA-Z]/i],
    ["RW_RELAY_LOG_POS", /(RELAY_LOG_POS)[^_a-zA-Z]/i],
    ["RW_RELAY_THREAD", /(RELAY_THREAD)[^_a-zA-Z]/i],
    ["RW_RELEASE", /(RELEASE)[^_a-zA-Z]/i],
    ["RW_RELOAD", /(RELOAD)[^_a-zA-Z]/i],
    ["RW_REMOVE", /(REMOVE)[^_a-zA-Z]/i],
    ["RW_RENAME", /(RENAME)[^_a-zA-Z]/i],
    ["RW_REORGANIZE", /(REORGANIZE)[^_a-zA-Z]/i],
    ["RW_REPAIR", /(REPAIR)[^_a-zA-Z]/i],
    ["RW_REPEAT", /(REPEAT)[^_a-zA-Z]/i],
    ["RW_REPEATABLE", /(REPEATABLE)[^_a-zA-Z]/i],
    ["RW_REPLACE", /(REPLACE)[^_a-zA-Z]/i],
    ["RW_REPLICATE_DO_DB", /(REPLICATE_DO_DB)[^_a-zA-Z]/i],
    ["RW_REPLICATE_DO_TABLE", /(REPLICATE_DO_TABLE)[^_a-zA-Z]/i],
    ["RW_REPLICATE_IGNORE_DB", /(REPLICATE_IGNORE_DB)[^_a-zA-Z]/i],
    ["RW_REPLICATE_IGNORE_TABLE", /(REPLICATE_IGNORE_TABLE)[^_a-zA-Z]/i],
    ["RW_REPLICATE_REWRITE_DB", /(REPLICATE_REWRITE_DB)[^_a-zA-Z]/i],
    ["RW_REPLICATE_WILD_DO_TABLE", /(REPLICATE_WILD_DO_TABLE)[^_a-zA-Z]/i],
    ["RW_REPLICATE_WILD_IGNORE_TABLE", /(REPLICATE_WILD_IGNORE_TABLE)[^_a-zA-Z]/i],
    ["RW_REPLICATION", /(REPLICATION)[^_a-zA-Z]/i],
    ["RW_REQUIRE", /(REQUIRE)[^_a-zA-Z]/i],
    ["RW_RESET", /(RESET)[^_a-zA-Z]/i],
    ["RW_RESIGNAL", /(RESIGNAL)[^_a-zA-Z]/i],
    ["RW_RESTORE", /(RESTORE)[^_a-zA-Z]/i],
    ["RW_RESTRICT", /(RESTRICT)[^_a-zA-Z]/i],
    ["RW_RESUME", /(RESUME)[^_a-zA-Z]/i],
    ["RW_RETURN", /(RETURN)[^_a-zA-Z]/i],
    ["RW_RETURNED_SQLSTATE", /(RETURNED_SQLSTATE)[^_a-zA-Z]/i],
    ["RW_RETURNS", /(RETURNS)[^_a-zA-Z]/i],
    ["RW_REVERSE", /(REVERSE)[^_a-zA-Z]/i],
    ["RW_REVOKE", /(REVOKE)[^_a-zA-Z]/i],
    ["RW_RIGHT", /(RIGHT)[^_a-zA-Z]/i],
    ["RW_RLIKE", /(RLIKE)[^_a-zA-Z]/i],
    ["RW_ROLLBACK", /(ROLLBACK)[^_a-zA-Z]/i],
    ["RW_ROLLUP", /(ROLLUP)[^_a-zA-Z]/i],
    ["RW_ROTATE", /(ROTATE)[^_a-zA-Z]/i],
    ["RW_ROUTINE", /(ROUTINE)[^_a-zA-Z]/i],
    ["RW_ROW", /(ROW)[^_a-zA-Z]/i],
    ["RW_ROWS", /(ROWS)[^_a-zA-Z]/i],
    ["RW_ROW_COUNT", /(ROW_COUNT)[^_a-zA-Z]/i],
    ["RW_ROW_FORMAT", /(ROW_FORMAT)[^_a-zA-Z]/i],
    ["RW_RTREE", /(RTREE)[^_a-zA-Z]/i],
    ["RW_SAVEPOINT", /(SAVEPOINT)[^_a-zA-Z]/i],
    ["RW_SCHEDULE", /(SCHEDULE)[^_a-zA-Z]/i],
    ["RW_SCHEMA", /(SCHEMA)[^_a-zA-Z]/i],
    ["RW_SCHEMAS", /(SCHEMAS)[^_a-zA-Z]/i],
    ["RW_SCHEMA_NAME", /(SCHEMA_NAME)[^_a-zA-Z]/i],
    ["RW_SECOND", /(SECOND)[^_a-zA-Z]/i],
    ["RW_SECOND_MICROSECOND", /(SECOND_MICROSECOND)[^_a-zA-Z]/i],
    ["RW_SECURITY", /(SECURITY)[^_a-zA-Z]/i],
    ["RW_SELECT", /(SELECT)[^_a-zA-Z]/i],
    ["RW_SENSITIVE", /(SENSITIVE)[^_a-zA-Z]/i],
    ["RW_SEPARATOR", /(SEPARATOR)[^_a-zA-Z]/i],
    ["RW_SERIAL", /(SERIAL)[^_a-zA-Z]/i],
    ["RW_SERIALIZABLE", /(SERIALIZABLE)[^_a-zA-Z]/i],
    ["RW_SERVER", /(SERVER)[^_a-zA-Z]/i],
    ["RW_SESSION", /(SESSION)[^_a-zA-Z]/i],
    ["RW_SET", /(SET)[^_a-zA-Z]/i],
    ["RW_SHARE", /(SHARE)[^_a-zA-Z]/i],
    ["RW_SHOW", /(SHOW)[^_a-zA-Z]/i],
    ["RW_SHUTDOWN", /(SHUTDOWN)[^_a-zA-Z]/i],
    ["RW_SIGNAL", /(SIGNAL)[^_a-zA-Z]/i],
    ["RW_SIGNED", /(SIGNED)[^_a-zA-Z]/i],
    ["RW_SIMPLE", /(SIMPLE)[^_a-zA-Z]/i],
    ["RW_SLAVE", /(SLAVE)[^_a-zA-Z]/i],
    ["RW_SLOW", /(SLOW)[^_a-zA-Z]/i],
    ["RW_SMALLINT", /(SMALLINT)[^_a-zA-Z]/i],
    ["RW_SNAPSHOT", /(SNAPSHOT)[^_a-zA-Z]/i],
    ["RW_SOCKET", /(SOCKET)[^_a-zA-Z]/i],
    ["RW_SOME", /(SOME)[^_a-zA-Z]/i],
    ["RW_SONAME", /(SONAME)[^_a-zA-Z]/i],
    ["RW_SOUNDS", /(SOUNDS)[^_a-zA-Z]/i],
    ["RW_SOURCE", /(SOURCE)[^_a-zA-Z]/i],
    ["RW_SPATIAL", /(SPATIAL)[^_a-zA-Z]/i],
    ["RW_SPECIFIC", /(SPECIFIC)[^_a-zA-Z]/i],
    ["RW_SQL", /(SQL)[^_a-zA-Z]/i],
    ["RW_SQLEXCEPTION", /(SQLEXCEPTION)[^_a-zA-Z]/i],
    ["RW_SQLSTATE", /(SQLSTATE)[^_a-zA-Z]/i],
    ["RW_SQLWARNING", /(SQLWARNING)[^_a-zA-Z]/i],
    ["RW_SQL_AFTER_GTIDS", /(SQL_AFTER_GTIDS)[^_a-zA-Z]/i],
    ["RW_SQL_AFTER_MTS_GAPS", /(SQL_AFTER_MTS_GAPS)[^_a-zA-Z]/i],
    ["RW_SQL_BEFORE_GTIDS", /(SQL_BEFORE_GTIDS)[^_a-zA-Z]/i],
    ["RW_SQL_BIG_RESULT", /(SQL_BIG_RESULT)[^_a-zA-Z]/i],
    ["RW_SQL_BUFFER_RESULT", /(SQL_BUFFER_RESULT)[^_a-zA-Z]/i],
    ["RW_SQL_CACHE", /(SQL_CACHE)[^_a-zA-Z]/i],
    ["RW_SQL_CALC_FOUND_ROWS", /(SQL_CALC_FOUND_ROWS)[^_a-zA-Z]/i],
    ["RW_SQL_NO_CACHE", /(SQL_NO_CACHE)[^_a-zA-Z]/i],
    ["RW_SQL_SMALL_RESULT", /(SQL_SMALL_RESULT)[^_a-zA-Z]/i],
    ["RW_SQL_THREAD", /(SQL_THREAD)[^_a-zA-Z]/i],
    ["RW_SQL_TSI_DAY", /(SQL_TSI_DAY)[^_a-zA-Z]/i],
    ["RW_SQL_TSI_HOUR", /(SQL_TSI_HOUR)[^_a-zA-Z]/i],
    ["RW_SQL_TSI_MINUTE", /(SQL_TSI_MINUTE)[^_a-zA-Z]/i],
    ["RW_SQL_TSI_MONTH", /(SQL_TSI_MONTH)[^_a-zA-Z]/i],
    ["RW_SQL_TSI_QUARTER", /(SQL_TSI_QUARTER)[^_a-zA-Z]/i],
    ["RW_SQL_TSI_SECOND", /(SQL_TSI_SECOND)[^_a-zA-Z]/i],
    ["RW_SQL_TSI_WEEK", /(SQL_TSI_WEEK)[^_a-zA-Z]/i],
    ["RW_SQL_TSI_YEAR", /(SQL_TSI_YEAR)[^_a-zA-Z]/i],
    ["RW_SSL", /(SSL)[^_a-zA-Z]/i],
    ["RW_STACKED", /(STACKED)[^_a-zA-Z]/i],
    ["RW_START", /(START)[^_a-zA-Z]/i],
    ["RW_STARTING", /(STARTING)[^_a-zA-Z]/i],
    ["RW_STARTS", /(STARTS)[^_a-zA-Z]/i],
    ["RW_STATS_AUTO_RECALC", /(STATS_AUTO_RECALC)[^_a-zA-Z]/i],
    ["RW_STATS_PERSISTENT", /(STATS_PERSISTENT)[^_a-zA-Z]/i],
    ["RW_STATS_SAMPLE_PAGES", /(STATS_SAMPLE_PAGES)[^_a-zA-Z]/i],
    ["RW_STATUS", /(STATUS)[^_a-zA-Z]/i],
    ["RW_STOP", /(STOP)[^_a-zA-Z]/i],
    ["RW_STORAGE", /(STORAGE)[^_a-zA-Z]/i],
    ["RW_STORED", /(STORED)[^_a-zA-Z]/i],
    ["RW_STRAIGHT_JOIN", /(STRAIGHT_JOIN)[^_a-zA-Z]/i],
    ["RW_STRING", /(STRING)[^_a-zA-Z]/i],
    ["RW_SUBCLASS_ORIGIN", /(SUBCLASS_ORIGIN)[^_a-zA-Z]/i],
    ["RW_SUBJECT", /(SUBJECT)[^_a-zA-Z]/i],
    ["RW_SUBPARTITION", /(SUBPARTITION)[^_a-zA-Z]/i],
    ["RW_SUBPARTITIONS", /(SUBPARTITIONS)[^_a-zA-Z]/i],
    ["RW_SUPER", /(SUPER)[^_a-zA-Z]/i],
    ["RW_SUSPEND", /(SUSPEND)[^_a-zA-Z]/i],
    ["RW_SWAPS", /(SWAPS)[^_a-zA-Z]/i],
    ["RW_SWITCHES", /(SWITCHES)[^_a-zA-Z]/i],
    ["RW_TABLE", /(TABLE)[^_a-zA-Z]/i],
    ["RW_TABLES", /(TABLES)[^_a-zA-Z]/i],
    ["RW_TABLESPACE", /(TABLESPACE)[^_a-zA-Z]/i],
    ["RW_TABLE_CHECKSUM", /(TABLE_CHECKSUM)[^_a-zA-Z]/i],
    ["RW_TABLE_NAME", /(TABLE_NAME)[^_a-zA-Z]/i],
    ["RW_TEMPORARY", /(TEMPORARY)[^_a-zA-Z]/i],
    ["RW_TEMPTABLE", /(TEMPTABLE)[^_a-zA-Z]/i],
    ["RW_TERMINATED", /(TERMINATED)[^_a-zA-Z]/i],
    ["RW_TEXT", /(TEXT)[^_a-zA-Z]/i],
    ["RW_THAN", /(THAN)[^_a-zA-Z]/i],
    ["RW_THEN", /(THEN)[^_a-zA-Z]/i],
    ["RW_TIME", /(TIME)[^_a-zA-Z]/i],
    ["RW_TIMESTAMP", /(TIMESTAMP)[^_a-zA-Z]/i],
    ["RW_TIMESTAMPADD", /(TIMESTAMPADD)[^_a-zA-Z]/i],
    ["RW_TIMESTAMPDIFF", /(TIMESTAMPDIFF)[^_a-zA-Z]/i],
    ["RW_TINYBLOB", /(TINYBLOB)[^_a-zA-Z]/i],
    ["RW_TINYINT", /(TINYINT)[^_a-zA-Z]/i],
    ["RW_TINYTEXT", /(TINYTEXT)[^_a-zA-Z]/i],
    ["RW_TO", /(TO)[^_a-zA-Z]/i],
    ["RW_TRAILING", /(TRAILING)[^_a-zA-Z]/i],
    ["RW_TRANSACTION", /(TRANSACTION)[^_a-zA-Z]/i],
    ["RW_TRIGGER", /(TRIGGER)[^_a-zA-Z]/i],
    ["RW_TRIGGERS", /(TRIGGERS)[^_a-zA-Z]/i],
    ["RW_TRUE", /(TRUE)[^_a-zA-Z]/i],
    ["RW_TRUNCATE", /(TRUNCATE)[^_a-zA-Z]/i],
    ["RW_TYPE", /(TYPE)[^_a-zA-Z]/i],
    ["RW_TYPES", /(TYPES)[^_a-zA-Z]/i],
    ["RW_UNCOMMITTED", /(UNCOMMITTED)[^_a-zA-Z]/i],
    ["RW_UNDEFINED", /(UNDEFINED)[^_a-zA-Z]/i],
    ["RW_UNDO", /(UNDO)[^_a-zA-Z]/i],
    ["RW_UNDOFILE", /(UNDOFILE)[^_a-zA-Z]/i],
    ["RW_UNDO_BUFFER_SIZE", /(UNDO_BUFFER_SIZE)[^_a-zA-Z]/i],
    ["RW_UNICODE", /(UNICODE)[^_a-zA-Z]/i],
    ["RW_UNINSTALL", /(UNINSTALL)[^_a-zA-Z]/i],
    ["RW_UNION", /(UNION)[^_a-zA-Z]/i],
    ["RW_UNIQUE", /(UNIQUE)[^_a-zA-Z]/i],
    ["RW_UNKNOWN", /(UNKNOWN)[^_a-zA-Z]/i],
    ["RW_UNLOCK", /(UNLOCK)[^_a-zA-Z]/i],
    ["RW_UNSIGNED", /(UNSIGNED)[^_a-zA-Z]/i],
    ["RW_UNTIL", /(UNTIL)[^_a-zA-Z]/i],
    ["RW_UPDATE", /(UPDATE)[^_a-zA-Z]/i],
    ["RW_UPGRADE", /(UPGRADE)[^_a-zA-Z]/i],
    ["RW_USAGE", /(USAGE)[^_a-zA-Z]/i],
    ["RW_USE", /(USE)[^_a-zA-Z]/i],
    ["RW_USER", /(USER)[^_a-zA-Z]/i],
    ["RW_USER_RESOURCES", /(USER_RESOURCES)[^_a-zA-Z]/i],
    ["RW_USE_FRM", /(USE_FRM)[^_a-zA-Z]/i],
    ["RW_USING", /(USING)[^_a-zA-Z]/i],
    ["RW_UTC_DATE", /(UTC_DATE)[^_a-zA-Z]/i],
    ["RW_UTC_TIME", /(UTC_TIME)[^_a-zA-Z]/i],
    ["RW_UTC_TIMESTAMP", /(UTC_TIMESTAMP)[^_a-zA-Z]/i],
    ["RW_VALIDATION", /(VALIDATION)[^_a-zA-Z]/i],
    ["RW_VALUE", /(VALUE)[^_a-zA-Z]/i],
    ["RW_VALUES", /(VALUES)[^_a-zA-Z]/i],
    ["RW_VARBINARY", /(VARBINARY)[^_a-zA-Z]/i],
    ["RW_VARCHAR", /(VARCHAR)[^_a-zA-Z]/i],
    ["RW_VARCHARACTER", /(VARCHARACTER)[^_a-zA-Z]/i],
    ["RW_VARIABLES", /(VARIABLES)[^_a-zA-Z]/i],
    ["RW_VARYING", /(VARYING)[^_a-zA-Z]/i],
    ["RW_VIEW", /(VIEW)[^_a-zA-Z]/i],
    ["RW_VIRTUAL", /(VIRTUAL)[^_a-zA-Z]/i],
    ["RW_WAIT", /(WAIT)[^_a-zA-Z]/i],
    ["RW_WARNINGS", /(WARNINGS)[^_a-zA-Z]/i],
    ["RW_WEEK", /(WEEK)[^_a-zA-Z]/i],
    ["RW_WEIGHT_STRING", /(WEIGHT_STRING)[^_a-zA-Z]/i],
    ["RW_WHEN", /(WHEN)[^_a-zA-Z]/i],
    ["RW_WHERE", /(WHERE)[^_a-zA-Z]/i],
    ["RW_WHILE", /(WHILE)[^_a-zA-Z]/i],
    ["RW_WITH", /(WITH)[^_a-zA-Z]/i],
    ["RW_WITHOUT", /(WITHOUT)[^_a-zA-Z]/i],
    ["RW_WORK", /(WORK)[^_a-zA-Z]/i],
    ["RW_WRAPPER", /(WRAPPER)[^_a-zA-Z]/i],
    ["RW_WRITE", /(WRITE)[^_a-zA-Z]/i],
    ["RW_X509", /(X509)[^_a-zA-Z]/i],
    ["RW_XA", /(XA)[^_a-zA-Z]/i],
    ["RW_XID", /(XID)[^_a-zA-Z]/i],
    ["RW_XML", /(XML)[^_a-zA-Z]/i],
    ["RW_XOR", /(XOR)[^_a-zA-Z]/i],
    ["RW_YEAR", /(YEAR)[^_a-zA-Z]/i],
    ["RW_YEAR_MONTH", /(YEAR_MONTH)[^_a-zA-Z]/i],
    ["RW_ZEROFILL", /(ZEROFILL)[^_a-zA-Z]/i],
    ["TICK_STRING", /\`.*?[^\\]\`/i],
];
//# sourceMappingURL=tokens.js.map