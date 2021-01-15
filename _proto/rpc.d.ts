import * as $protobuf from "protobufjs";
/** Namespace customer. */
export namespace customer {

    /** Represents a CustomersService */
    class CustomersService extends $protobuf.rpc.Service {

        /**
         * Constructs a new CustomersService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new CustomersService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CustomersService;

        /**
         * Calls FindOne.
         * @param request CustomerById message or plain object
         * @param callback Node-style callback called with the error, if any, and Customer
         */
        public findOne(request: customer.ICustomerById, callback: customer.CustomersService.FindOneCallback): void;

        /**
         * Calls FindOne.
         * @param request CustomerById message or plain object
         * @returns Promise
         */
        public findOne(request: customer.ICustomerById): Promise<customer.Customer>;
    }

    namespace CustomersService {

        /**
         * Callback as used by {@link customer.CustomersService#findOne}.
         * @param error Error, if any
         * @param [response] Customer
         */
        type FindOneCallback = (error: (Error|null), response?: customer.Customer) => void;
    }

    /** Properties of a CustomerById. */
    interface ICustomerById {

        /** CustomerById id */
        id?: (number|null);
    }

    /** Represents a CustomerById. */
    class CustomerById implements ICustomerById {

        /**
         * Constructs a new CustomerById.
         * @param [properties] Properties to set
         */
        constructor(properties?: customer.ICustomerById);

        /** CustomerById id. */
        public id: number;

        /**
         * Creates a new CustomerById instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CustomerById instance
         */
        public static create(properties?: customer.ICustomerById): customer.CustomerById;

        /**
         * Encodes the specified CustomerById message. Does not implicitly {@link customer.CustomerById.verify|verify} messages.
         * @param message CustomerById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: customer.ICustomerById, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CustomerById message, length delimited. Does not implicitly {@link customer.CustomerById.verify|verify} messages.
         * @param message CustomerById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: customer.ICustomerById, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CustomerById message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CustomerById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): customer.CustomerById;

        /**
         * Decodes a CustomerById message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CustomerById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): customer.CustomerById;

        /**
         * Verifies a CustomerById message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CustomerById message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CustomerById
         */
        public static fromObject(object: { [k: string]: any }): customer.CustomerById;

        /**
         * Creates a plain object from a CustomerById message. Also converts values to other types if specified.
         * @param message CustomerById
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: customer.CustomerById, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CustomerById to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Customer. */
    interface ICustomer {

        /** Customer id */
        id?: (number|null);

        /** Customer name */
        name?: (string|null);
    }

    /** Represents a Customer. */
    class Customer implements ICustomer {

        /**
         * Constructs a new Customer.
         * @param [properties] Properties to set
         */
        constructor(properties?: customer.ICustomer);

        /** Customer id. */
        public id: number;

        /** Customer name. */
        public name: string;

        /**
         * Creates a new Customer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Customer instance
         */
        public static create(properties?: customer.ICustomer): customer.Customer;

        /**
         * Encodes the specified Customer message. Does not implicitly {@link customer.Customer.verify|verify} messages.
         * @param message Customer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: customer.ICustomer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Customer message, length delimited. Does not implicitly {@link customer.Customer.verify|verify} messages.
         * @param message Customer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: customer.ICustomer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Customer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Customer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): customer.Customer;

        /**
         * Decodes a Customer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Customer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): customer.Customer;

        /**
         * Verifies a Customer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Customer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Customer
         */
        public static fromObject(object: { [k: string]: any }): customer.Customer;

        /**
         * Creates a plain object from a Customer message. Also converts values to other types if specified.
         * @param message Customer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: customer.Customer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Customer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace organization. */
export namespace organization {

    /** Represents an OrganizationesService */
    class OrganizationesService extends $protobuf.rpc.Service {

        /**
         * Constructs a new OrganizationesService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new OrganizationesService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): OrganizationesService;

        /**
         * Calls FindOne.
         * @param request OrganizationById message or plain object
         * @param callback Node-style callback called with the error, if any, and Organization
         */
        public findOne(request: organization.IOrganizationById, callback: organization.OrganizationesService.FindOneCallback): void;

        /**
         * Calls FindOne.
         * @param request OrganizationById message or plain object
         * @returns Promise
         */
        public findOne(request: organization.IOrganizationById): Promise<organization.Organization>;
    }

    namespace OrganizationesService {

        /**
         * Callback as used by {@link organization.OrganizationesService#findOne}.
         * @param error Error, if any
         * @param [response] Organization
         */
        type FindOneCallback = (error: (Error|null), response?: organization.Organization) => void;
    }

    /** Properties of an OrganizationById. */
    interface IOrganizationById {

        /** OrganizationById id */
        id?: (number|null);
    }

    /** Represents an OrganizationById. */
    class OrganizationById implements IOrganizationById {

        /**
         * Constructs a new OrganizationById.
         * @param [properties] Properties to set
         */
        constructor(properties?: organization.IOrganizationById);

        /** OrganizationById id. */
        public id: number;

        /**
         * Creates a new OrganizationById instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OrganizationById instance
         */
        public static create(properties?: organization.IOrganizationById): organization.OrganizationById;

        /**
         * Encodes the specified OrganizationById message. Does not implicitly {@link organization.OrganizationById.verify|verify} messages.
         * @param message OrganizationById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: organization.IOrganizationById, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OrganizationById message, length delimited. Does not implicitly {@link organization.OrganizationById.verify|verify} messages.
         * @param message OrganizationById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: organization.IOrganizationById, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OrganizationById message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OrganizationById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): organization.OrganizationById;

        /**
         * Decodes an OrganizationById message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OrganizationById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): organization.OrganizationById;

        /**
         * Verifies an OrganizationById message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OrganizationById message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OrganizationById
         */
        public static fromObject(object: { [k: string]: any }): organization.OrganizationById;

        /**
         * Creates a plain object from an OrganizationById message. Also converts values to other types if specified.
         * @param message OrganizationById
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: organization.OrganizationById, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OrganizationById to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Organization. */
    interface IOrganization {

        /** Organization id */
        id?: (number|null);

        /** Organization name */
        name?: (string|null);
    }

    /** Represents an Organization. */
    class Organization implements IOrganization {

        /**
         * Constructs a new Organization.
         * @param [properties] Properties to set
         */
        constructor(properties?: organization.IOrganization);

        /** Organization id. */
        public id: number;

        /** Organization name. */
        public name: string;

        /**
         * Creates a new Organization instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Organization instance
         */
        public static create(properties?: organization.IOrganization): organization.Organization;

        /**
         * Encodes the specified Organization message. Does not implicitly {@link organization.Organization.verify|verify} messages.
         * @param message Organization message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: organization.IOrganization, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Organization message, length delimited. Does not implicitly {@link organization.Organization.verify|verify} messages.
         * @param message Organization message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: organization.IOrganization, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Organization message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Organization
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): organization.Organization;

        /**
         * Decodes an Organization message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Organization
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): organization.Organization;

        /**
         * Verifies an Organization message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Organization message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Organization
         */
        public static fromObject(object: { [k: string]: any }): organization.Organization;

        /**
         * Creates a plain object from an Organization message. Also converts values to other types if specified.
         * @param message Organization
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: organization.Organization, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Organization to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
