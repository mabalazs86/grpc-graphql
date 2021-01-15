/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.customer = (function() {

    /**
     * Namespace customer.
     * @exports customer
     * @namespace
     */
    var customer = {};

    customer.CustomersService = (function() {

        /**
         * Constructs a new CustomersService service.
         * @memberof customer
         * @classdesc Represents a CustomersService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function CustomersService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (CustomersService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = CustomersService;

        /**
         * Creates new CustomersService service using the specified rpc implementation.
         * @function create
         * @memberof customer.CustomersService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {CustomersService} RPC service. Useful where requests and/or responses are streamed.
         */
        CustomersService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link customer.CustomersService#findOne}.
         * @memberof customer.CustomersService
         * @typedef FindOneCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {customer.Customer} [response] Customer
         */

        /**
         * Calls FindOne.
         * @function findOne
         * @memberof customer.CustomersService
         * @instance
         * @param {customer.ICustomerById} request CustomerById message or plain object
         * @param {customer.CustomersService.FindOneCallback} callback Node-style callback called with the error, if any, and Customer
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CustomersService.prototype.findOne = function findOne(request, callback) {
            return this.rpcCall(findOne, $root.customer.CustomerById, $root.customer.Customer, request, callback);
        }, "name", { value: "FindOne" });

        /**
         * Calls FindOne.
         * @function findOne
         * @memberof customer.CustomersService
         * @instance
         * @param {customer.ICustomerById} request CustomerById message or plain object
         * @returns {Promise<customer.Customer>} Promise
         * @variation 2
         */

        return CustomersService;
    })();

    customer.CustomerById = (function() {

        /**
         * Properties of a CustomerById.
         * @memberof customer
         * @interface ICustomerById
         * @property {number|null} [id] CustomerById id
         */

        /**
         * Constructs a new CustomerById.
         * @memberof customer
         * @classdesc Represents a CustomerById.
         * @implements ICustomerById
         * @constructor
         * @param {customer.ICustomerById=} [properties] Properties to set
         */
        function CustomerById(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CustomerById id.
         * @member {number} id
         * @memberof customer.CustomerById
         * @instance
         */
        CustomerById.prototype.id = 0;

        /**
         * Creates a new CustomerById instance using the specified properties.
         * @function create
         * @memberof customer.CustomerById
         * @static
         * @param {customer.ICustomerById=} [properties] Properties to set
         * @returns {customer.CustomerById} CustomerById instance
         */
        CustomerById.create = function create(properties) {
            return new CustomerById(properties);
        };

        /**
         * Encodes the specified CustomerById message. Does not implicitly {@link customer.CustomerById.verify|verify} messages.
         * @function encode
         * @memberof customer.CustomerById
         * @static
         * @param {customer.ICustomerById} message CustomerById message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CustomerById.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            return writer;
        };

        /**
         * Encodes the specified CustomerById message, length delimited. Does not implicitly {@link customer.CustomerById.verify|verify} messages.
         * @function encodeDelimited
         * @memberof customer.CustomerById
         * @static
         * @param {customer.ICustomerById} message CustomerById message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CustomerById.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CustomerById message from the specified reader or buffer.
         * @function decode
         * @memberof customer.CustomerById
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {customer.CustomerById} CustomerById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CustomerById.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.customer.CustomerById();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CustomerById message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof customer.CustomerById
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {customer.CustomerById} CustomerById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CustomerById.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CustomerById message.
         * @function verify
         * @memberof customer.CustomerById
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CustomerById.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            return null;
        };

        /**
         * Creates a CustomerById message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof customer.CustomerById
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {customer.CustomerById} CustomerById
         */
        CustomerById.fromObject = function fromObject(object) {
            if (object instanceof $root.customer.CustomerById)
                return object;
            var message = new $root.customer.CustomerById();
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from a CustomerById message. Also converts values to other types if specified.
         * @function toObject
         * @memberof customer.CustomerById
         * @static
         * @param {customer.CustomerById} message CustomerById
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CustomerById.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this CustomerById to JSON.
         * @function toJSON
         * @memberof customer.CustomerById
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CustomerById.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CustomerById;
    })();

    customer.Customer = (function() {

        /**
         * Properties of a Customer.
         * @memberof customer
         * @interface ICustomer
         * @property {number|null} [id] Customer id
         * @property {string|null} [name] Customer name
         */

        /**
         * Constructs a new Customer.
         * @memberof customer
         * @classdesc Represents a Customer.
         * @implements ICustomer
         * @constructor
         * @param {customer.ICustomer=} [properties] Properties to set
         */
        function Customer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Customer id.
         * @member {number} id
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.id = 0;

        /**
         * Customer name.
         * @member {string} name
         * @memberof customer.Customer
         * @instance
         */
        Customer.prototype.name = "";

        /**
         * Creates a new Customer instance using the specified properties.
         * @function create
         * @memberof customer.Customer
         * @static
         * @param {customer.ICustomer=} [properties] Properties to set
         * @returns {customer.Customer} Customer instance
         */
        Customer.create = function create(properties) {
            return new Customer(properties);
        };

        /**
         * Encodes the specified Customer message. Does not implicitly {@link customer.Customer.verify|verify} messages.
         * @function encode
         * @memberof customer.Customer
         * @static
         * @param {customer.ICustomer} message Customer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Customer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified Customer message, length delimited. Does not implicitly {@link customer.Customer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof customer.Customer
         * @static
         * @param {customer.ICustomer} message Customer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Customer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Customer message from the specified reader or buffer.
         * @function decode
         * @memberof customer.Customer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {customer.Customer} Customer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Customer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.customer.Customer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Customer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof customer.Customer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {customer.Customer} Customer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Customer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Customer message.
         * @function verify
         * @memberof customer.Customer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Customer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a Customer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof customer.Customer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {customer.Customer} Customer
         */
        Customer.fromObject = function fromObject(object) {
            if (object instanceof $root.customer.Customer)
                return object;
            var message = new $root.customer.Customer();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a Customer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof customer.Customer
         * @static
         * @param {customer.Customer} message Customer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Customer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this Customer to JSON.
         * @function toJSON
         * @memberof customer.Customer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Customer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Customer;
    })();

    return customer;
})();

$root.organization = (function() {

    /**
     * Namespace organization.
     * @exports organization
     * @namespace
     */
    var organization = {};

    organization.OrganizationesService = (function() {

        /**
         * Constructs a new OrganizationesService service.
         * @memberof organization
         * @classdesc Represents an OrganizationesService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function OrganizationesService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (OrganizationesService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = OrganizationesService;

        /**
         * Creates new OrganizationesService service using the specified rpc implementation.
         * @function create
         * @memberof organization.OrganizationesService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {OrganizationesService} RPC service. Useful where requests and/or responses are streamed.
         */
        OrganizationesService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link organization.OrganizationesService#findOne}.
         * @memberof organization.OrganizationesService
         * @typedef FindOneCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {organization.Organization} [response] Organization
         */

        /**
         * Calls FindOne.
         * @function findOne
         * @memberof organization.OrganizationesService
         * @instance
         * @param {organization.IOrganizationById} request OrganizationById message or plain object
         * @param {organization.OrganizationesService.FindOneCallback} callback Node-style callback called with the error, if any, and Organization
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(OrganizationesService.prototype.findOne = function findOne(request, callback) {
            return this.rpcCall(findOne, $root.organization.OrganizationById, $root.organization.Organization, request, callback);
        }, "name", { value: "FindOne" });

        /**
         * Calls FindOne.
         * @function findOne
         * @memberof organization.OrganizationesService
         * @instance
         * @param {organization.IOrganizationById} request OrganizationById message or plain object
         * @returns {Promise<organization.Organization>} Promise
         * @variation 2
         */

        return OrganizationesService;
    })();

    organization.OrganizationById = (function() {

        /**
         * Properties of an OrganizationById.
         * @memberof organization
         * @interface IOrganizationById
         * @property {number|null} [id] OrganizationById id
         */

        /**
         * Constructs a new OrganizationById.
         * @memberof organization
         * @classdesc Represents an OrganizationById.
         * @implements IOrganizationById
         * @constructor
         * @param {organization.IOrganizationById=} [properties] Properties to set
         */
        function OrganizationById(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OrganizationById id.
         * @member {number} id
         * @memberof organization.OrganizationById
         * @instance
         */
        OrganizationById.prototype.id = 0;

        /**
         * Creates a new OrganizationById instance using the specified properties.
         * @function create
         * @memberof organization.OrganizationById
         * @static
         * @param {organization.IOrganizationById=} [properties] Properties to set
         * @returns {organization.OrganizationById} OrganizationById instance
         */
        OrganizationById.create = function create(properties) {
            return new OrganizationById(properties);
        };

        /**
         * Encodes the specified OrganizationById message. Does not implicitly {@link organization.OrganizationById.verify|verify} messages.
         * @function encode
         * @memberof organization.OrganizationById
         * @static
         * @param {organization.IOrganizationById} message OrganizationById message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OrganizationById.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            return writer;
        };

        /**
         * Encodes the specified OrganizationById message, length delimited. Does not implicitly {@link organization.OrganizationById.verify|verify} messages.
         * @function encodeDelimited
         * @memberof organization.OrganizationById
         * @static
         * @param {organization.IOrganizationById} message OrganizationById message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OrganizationById.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OrganizationById message from the specified reader or buffer.
         * @function decode
         * @memberof organization.OrganizationById
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {organization.OrganizationById} OrganizationById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OrganizationById.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.organization.OrganizationById();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OrganizationById message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof organization.OrganizationById
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {organization.OrganizationById} OrganizationById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OrganizationById.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OrganizationById message.
         * @function verify
         * @memberof organization.OrganizationById
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OrganizationById.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            return null;
        };

        /**
         * Creates an OrganizationById message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof organization.OrganizationById
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {organization.OrganizationById} OrganizationById
         */
        OrganizationById.fromObject = function fromObject(object) {
            if (object instanceof $root.organization.OrganizationById)
                return object;
            var message = new $root.organization.OrganizationById();
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from an OrganizationById message. Also converts values to other types if specified.
         * @function toObject
         * @memberof organization.OrganizationById
         * @static
         * @param {organization.OrganizationById} message OrganizationById
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OrganizationById.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this OrganizationById to JSON.
         * @function toJSON
         * @memberof organization.OrganizationById
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OrganizationById.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OrganizationById;
    })();

    organization.Organization = (function() {

        /**
         * Properties of an Organization.
         * @memberof organization
         * @interface IOrganization
         * @property {number|null} [id] Organization id
         * @property {string|null} [name] Organization name
         */

        /**
         * Constructs a new Organization.
         * @memberof organization
         * @classdesc Represents an Organization.
         * @implements IOrganization
         * @constructor
         * @param {organization.IOrganization=} [properties] Properties to set
         */
        function Organization(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Organization id.
         * @member {number} id
         * @memberof organization.Organization
         * @instance
         */
        Organization.prototype.id = 0;

        /**
         * Organization name.
         * @member {string} name
         * @memberof organization.Organization
         * @instance
         */
        Organization.prototype.name = "";

        /**
         * Creates a new Organization instance using the specified properties.
         * @function create
         * @memberof organization.Organization
         * @static
         * @param {organization.IOrganization=} [properties] Properties to set
         * @returns {organization.Organization} Organization instance
         */
        Organization.create = function create(properties) {
            return new Organization(properties);
        };

        /**
         * Encodes the specified Organization message. Does not implicitly {@link organization.Organization.verify|verify} messages.
         * @function encode
         * @memberof organization.Organization
         * @static
         * @param {organization.IOrganization} message Organization message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Organization.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified Organization message, length delimited. Does not implicitly {@link organization.Organization.verify|verify} messages.
         * @function encodeDelimited
         * @memberof organization.Organization
         * @static
         * @param {organization.IOrganization} message Organization message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Organization.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Organization message from the specified reader or buffer.
         * @function decode
         * @memberof organization.Organization
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {organization.Organization} Organization
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Organization.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.organization.Organization();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Organization message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof organization.Organization
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {organization.Organization} Organization
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Organization.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Organization message.
         * @function verify
         * @memberof organization.Organization
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Organization.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates an Organization message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof organization.Organization
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {organization.Organization} Organization
         */
        Organization.fromObject = function fromObject(object) {
            if (object instanceof $root.organization.Organization)
                return object;
            var message = new $root.organization.Organization();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from an Organization message. Also converts values to other types if specified.
         * @function toObject
         * @memberof organization.Organization
         * @static
         * @param {organization.Organization} message Organization
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Organization.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this Organization to JSON.
         * @function toJSON
         * @memberof organization.Organization
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Organization.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Organization;
    })();

    return organization;
})();

module.exports = $root;
