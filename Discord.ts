class endpoints {
    Websocket:string;
    Api:string;
    Cdn:string;
    App:string;
    Media:string;
    Invite:string;
    Template:string;
    Router:string;
    QR_Auth:string;
    object:any = {};
    constructor(args:any) {
        this['Websocket'] = args.websocket || 'gateway.discord.gg';
        this['Api'] = args.api || 'https://discord.com/api';
        this['Cdn'] = args.cdn || 'cdn.discordapp.com';
        this['App'] = args.app || 'discordapp.com';
        this['Media'] = args.media || 'media.discordapp.net';
        this['Invite'] = args.invite || 'discord.gg';
        this['Template'] = args.template || 'discord.new';
        this['Router'] = args.router || 'router.discordapp.net';
        this['QR_Auth'] = args.qr_auth || 'remote-auth-gateway.discord.gg';
        this.object['Websocket'] = 'gateway.discord.gg';
        this.object['Api'] = 'https://discord.com/api';
        this.object['Cdn'] = 'cdn.discordapp.com';
        this.object['App'] = 'discordapp.com';
        this.object['Media'] = 'media.discordapp.net';
        this.object['Invite'] = 'discord.gg';
        this.object['Template'] = 'discord.new';
        this.object['Router'] = 'router.discordapp.net';
        this.object['QR_Auth'] = 'remote-auth-gateway.discord.gg';
    }
}
export default class {
    static get websocket():string {
        return 'gateway.discord.gg'
    }
    static get api():string {
        return 'https://discord.com/api'
    }
    static get cdn():string {
        return 'cdn.discordapp.com'
    }
    static get app():string {
        return 'discordapp.com'
    }
    static get media():string {
        return 'media.discordapp.net'
    }
    static get invite():string {
        return 'discord.gg'
    }
    static get template():string {
        return 'discord.new'
    }
    static get router():string {
        return 'router.discordapp.net'
    }
    static get qr_auth():string {
        return 'remote-auth-gateway.discord.gg'
    }
    static get endpoints():endpoints {
        return new endpoints({
            'websocket':'gateway.discord.gg',
            'api':'https://discord.com/api',
            'cdn':'cdn.discordapp.com',
            'app':'discordapp.com',
            'media':'media.discordapp.net',
            'invite':'discord.gg',
            'template':'discord.new',
            'router':'router.discordapp.net',
            'qr_auth':'remote-auth-gateway.discord.gg'
        })
    }
}