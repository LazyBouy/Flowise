import { IChatMessageFeedback } from '../Interface'
import { getRunningExpressApp } from '../utils/getRunningExpressApp'
import { ChatMessageFeedback } from '../database/entities/ChatMessageFeedback'

/**
 * Method that updates chat message feedback.
 * @param {string} id
 * @param {Partial<IChatMessageFeedback>} chatMessageFeedback
 */
export const utilUpdateChatMessageFeedback = async (id: string, chatMessageFeedback: Partial<IChatMessageFeedback>) => {
    const flowXpresApp = getRunningExpressApp()
    const newChatMessageFeedback = new ChatMessageFeedback()
    Object.assign(newChatMessageFeedback, chatMessageFeedback)
    await flowXpresApp.AppDataSource.getRepository(ChatMessageFeedback).update({ id }, chatMessageFeedback)
    return { status: 'OK' }
}
