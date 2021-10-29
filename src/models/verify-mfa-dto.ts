/* tslint:disable */
/* eslint-disable */
/**
 * @holding-fpass/content-provider-api
 * Content Provider API
 *
 * OpenAPI spec version: 0.2.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface VerifyMfaDto
 */
export interface VerifyMfaDto {
    /**
     * Identificação do browser
     * @type {string}
     * @memberof VerifyMfaDto
     */
    machineId: any;
    /**
     * Código enviado ao usuário
     * @type {string}
     * @memberof VerifyMfaDto
     */
    code: any;
    /**
     * Informações do browser IP, para dar auditabilidade da ação
     * @type {string}
     * @memberof VerifyMfaDto
     */
    fingerprint: any;
}
