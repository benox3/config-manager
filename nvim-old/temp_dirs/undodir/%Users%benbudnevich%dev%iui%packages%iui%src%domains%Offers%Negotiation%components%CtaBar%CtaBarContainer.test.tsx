Vim�UnDo� 6nr�@���i�8�.���������U	�.�{��   [                                  _a&�    _�                            ����                                                                                                                                                                                                                                                                                                                                                             _a     �         W          �         V    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _a     �         W          declineInfo: {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _a     �         Y            �         X    5�_�                          ����                                                                                                                                                                                                                                                                                                                                                             _a3     �         Y            userInfo5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _a4    �         Y            userInfo: null       }5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _aQ     �         Y            userInfo: null,5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                             _aR     �         Y            userInfo: ,5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                             _aR     �         Y            userInfo: {,5�_�   	              
          ����                                                                                                                                                                                                                                                                                                                                                             _aS     �         [              �         Z    5�_�   
                    	    ����                                                                                                                                                                                                                                                                                                                                                             _a�     �         [      	        '5�_�                       !    ����                                                                                                                                                                                                                                                                                                                                                             _a�    �         [      "        firstName: 'declinerFirst'5�_�                     &       ����                                                                                                                                                                                                                                                                                                                                                             _a&�     �               [   !import { shallow } from 'enzyme';   import React from 'react';       +import { CtaBar } from 'Components/CtaBar';   .import { STATUSES } from 'Lib/getOfferStatus';   4import { CompanyRole } from 'Src/generated/graphql';       import CtaBarContainer, {      shouldAllowUploadCounterOffer,   } from './CtaBarContainer';       .React.useContext = jest.fn().mockReturnValue({   	  me: {},     currentOffer: {        creatorName: 'johnny bravo',       buyers: {         nodes: [   	        {   !          firstName: 'rocketman',   
        },         ],       },       declineInfo: {         userInfo: {   #        firstName: 'declinerFirst',         },       },     },     previousOffer: {   %    creatorName: 'Popeye the Sailor',       buyers: {         nodes: [   	        {              firstName: 'spaceman',   
        },         ],       },     },   });       #describe('CtaBarContainer', () => {   +  Object.keys(STATUSES).forEach(status => {   8    it(`renders properly for status: ${status}`, () => {         const props = {           buyerCompanyId: '123',           isLoading: false,           listingId: '123',   (        onMessageButtonClick: jest.fn(),   )        onOpenClearDraftModal: jest.fn(),   /        onOpenKeyboardShortcutModal: jest.fn(),   ,        onOpenDownloadOfferModal: jest.fn(),   (        offerStatus: status as STATUSES,   0        totalProductsInNegotiationCount: 325235,         };       ;      const tree = shallow(<CtaBarContainer {...props} />);       %      // ensure no params were missed   I      expect(tree.find(CtaBar).props().secondaryText).not.toContain('_');   G      expect(tree.find(CtaBar).props().primaryText).not.toContain('_');   %      expect(tree).toMatchSnapshot();       });     });   });       3describe('shouldAllowUploadCounterOffer()', () => {   ,  test('returning false for seller', () => {       expect(   %      shouldAllowUploadCounterOffer({   (        companyRole: CompanyRole.Seller,   	      }),       ).toBe(false);     });       *  test('returning true for buyer', () => {       expect(   %      shouldAllowUploadCounterOffer({   '        companyRole: CompanyRole.Buyer,   	      }),       ).toBe(true);     });       P  test('returning false for buyer with take all/no price allowed offer', () => {       expect(   %      shouldAllowUploadCounterOffer({   '        companyRole: CompanyRole.Buyer,   K        offerStatus: STATUSES.TAKE_ALL_OFFER_RECEIVED_CANNOT_COUNTER_PRICE,   	      }),       ).toBe(false);     });   });5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _a1     �         Y            userI:nfo5��