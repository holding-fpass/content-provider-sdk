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
 * @interface CreateInteractionDto
 */
export interface CreateInteractionDto {
    /**
     * 
     * @type {string}
     * @memberof CreateInteractionDto
     */
    type: CreateInteractionDtoTypeEnum;
    /**
     * 
     * @type {any}
     * @memberof CreateInteractionDto
     */
    extra?: any;
}

/**
    * @export
    * @enum {string}
    */
export enum CreateInteractionDtoTypeEnum {
    ViewCreated = 'live.view.created',
    ReactionCreated = 'live.reaction.created',
    CertificateCreated = 'live.certificate.created',
    ChatMessageCreated = 'live.chat.message.created',
    ChatMessageReplyCreated = 'live.chat.message.reply.created',
    PlayerFullscreenClick = 'live.player.fullscreen.click',
    PlayerReactionClick = 'live.player.reaction.click',
    PlayerReactionCreated = 'live.player.reaction.created'
}

