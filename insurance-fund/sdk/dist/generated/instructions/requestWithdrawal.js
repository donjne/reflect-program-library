"use strict";
/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestWithdrawalInstructionDiscriminator = exports.requestWithdrawalStruct = void 0;
exports.createRequestWithdrawalInstruction = createRequestWithdrawalInstruction;
const splToken = __importStar(require("@solana/spl-token"));
const beet = __importStar(require("@metaplex-foundation/beet"));
const web3 = __importStar(require("@solana/web3.js"));
const RequestWithdrawalArgs_1 = require("../types/RequestWithdrawalArgs");
/**
 * @category Instructions
 * @category RequestWithdrawal
 * @category generated
 */
exports.requestWithdrawalStruct = new beet.FixableBeetArgsStruct([
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['args', RequestWithdrawalArgs_1.requestWithdrawalArgsBeet],
], 'RequestWithdrawalInstructionArgs');
exports.requestWithdrawalInstructionDiscriminator = [
    251, 85, 121, 205, 56, 201, 12, 177,
];
/**
 * Creates a _RequestWithdrawal_ instruction.
 *
 * Optional accounts that are not provided default to the program ID since
 * this was indicated in the IDL from which this instruction was generated.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category RequestWithdrawal
 * @category generated
 */
function createRequestWithdrawalInstruction(accounts, args, programId = new web3.PublicKey('EiMoMLXBCKpxTdBwK2mBBaGFWH1v2JdT5nAhiyJdF3pV')) {
    var _a, _b, _c;
    const [data] = exports.requestWithdrawalStruct.serialize(Object.assign({ instructionDiscriminator: exports.requestWithdrawalInstructionDiscriminator }, args));
    const keys = [
        {
            pubkey: accounts.user,
            isWritable: true,
            isSigner: true,
        },
        {
            pubkey: accounts.settings,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.lockup,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.deposit,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.cooldown,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: (_a = accounts.rewardBoost) !== null && _a !== void 0 ? _a : programId,
            isWritable: accounts.rewardBoost != null,
            isSigner: false,
        },
        {
            pubkey: accounts.asset,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.assetMint,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.rewardMint,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.userAssetAta,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.userRewardAta,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.lockupAssetVault,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.assetRewardPool,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: accounts.clock,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: (_b = accounts.tokenProgram) !== null && _b !== void 0 ? _b : splToken.TOKEN_PROGRAM_ID,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: (_c = accounts.systemProgram) !== null && _c !== void 0 ? _c : web3.SystemProgram.programId,
            isWritable: false,
            isSigner: false,
        },
    ];
    if (accounts.anchorRemainingAccounts != null) {
        for (const acc of accounts.anchorRemainingAccounts) {
            keys.push(acc);
        }
    }
    const ix = new web3.TransactionInstruction({
        programId,
        keys,
        data,
    });
    return ix;
}
