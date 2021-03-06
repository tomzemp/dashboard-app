import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NotInterestedIcon from '@material-ui/icons/NotInterested'

import ItemHeader from '../ItemHeader/ItemHeader'
import Line from '../../../widgets/Line'

import { FILTER_ORG_UNIT } from '../../../actions/itemFilters'
import {
    sGetItemFiltersRoot,
    DEFAULT_STATE_ITEM_FILTERS,
} from '../../../reducers/itemFilters'

import { EDIT, isEditMode } from '../../Dashboard/dashboardModes'

const getIframeSrc = (appDetails, item, itemFilters) => {
    let iframeSrc = `${appDetails.launchUrl}?dashboardItemId=${item.id}`

    if (itemFilters[FILTER_ORG_UNIT] && itemFilters[FILTER_ORG_UNIT].length) {
        const ouIds = itemFilters[FILTER_ORG_UNIT].map(
            ouFilter => ouFilter.path.split('/').slice(-1)[0]
        )

        iframeSrc += `&userOrgUnit=${ouIds.join(',')}`
    }

    return iframeSrc
}

const AppItem = ({ dashboardMode, item, itemFilters }, context) => {
    let appDetails

    const appKey = item.appKey

    if (appKey) {
        appDetails = context.d2.system.installedApps.find(
            app => app.key === appKey
        )
    }

    const hideTitle =
        appDetails?.settings?.dashboardWidget?.hideTitle &&
        dashboardMode !== EDIT

    return appDetails && appDetails.name && appDetails.launchUrl ? (
        <>
            {!hideTitle && (
                <>
                    <ItemHeader
                        title={appDetails.name}
                        itemId={item.id}
                        dashboardMode={dashboardMode}
                        isShortened={item.shortened}
                    />
                    <Line />
                </>
            )}
            <iframe
                title={appDetails.name}
                src={getIframeSrc(appDetails, item, itemFilters)}
                className={
                    !hideTitle
                        ? 'dashboard-item-content'
                        : 'dashboard-item-content-hidden-title'
                }
                style={{ border: 'none' }}
            />
        </>
    ) : (
        <>
            <ItemHeader title={`${appKey} app not found`} />
            <Line />
            <div
                className="dashboard-item-content"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '90%',
                }}
            >
                <NotInterestedIcon
                    color="disabled"
                    disabled
                    style={{ width: 100, height: 100, align: 'center' }}
                />
            </div>
        </>
    )
}

AppItem.propTypes = {
    dashboardMode: PropTypes.string,
    item: PropTypes.object,
    itemFilters: PropTypes.object,
}

AppItem.contextTypes = {
    d2: PropTypes.object,
}

const mapStateToProps = (state, ownProps) => {
    const itemFilters = !isEditMode(ownProps.dashboardMode)
        ? sGetItemFiltersRoot(state)
        : DEFAULT_STATE_ITEM_FILTERS

    return { itemFilters }
}

export default connect(mapStateToProps)(AppItem)
