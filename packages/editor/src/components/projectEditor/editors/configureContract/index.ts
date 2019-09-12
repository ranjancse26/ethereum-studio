import { connect } from 'react-redux';
import { contractConfigActions } from '../../../../actions';
import ConfigureContract from './ConfigureContract';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { IContractConfiguration } from '../../../../models';
import { projectSelectors, contractConfigSelectors } from '../../../../selectors';

const mapStateToProps = (state: any) => ({
    accounts: projectSelectors.getAccounts(state),
    selectedContract: contractConfigSelectors.getSelectedContract(state),
    otherContracts: contractConfigSelectors.getOtherContracts(state)
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        saveContractConfig(contractConfig: IContractConfiguration) {
            dispatch(contractConfigActions.saveContractConfig(contractConfig));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfigureContract);
